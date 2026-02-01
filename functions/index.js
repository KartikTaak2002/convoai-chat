const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { logger } = require("firebase-functions/v2");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const { GoogleGenerativeAI } = require("@google/generative-ai");
admin.initializeApp();

const GEMINI_API_KEY = defineSecret("GEMINI_API_KEY");

exports.onNewMessage = onDocumentCreated(
  { document: "rooms/{roomId}/messages/{messageId}", region: "asia-south2", secrets: [GEMINI_API_KEY] },
  async (event) => {
    const message = event.data.data();
    const roomId = event.params.roomId;
    const text = (message.text || "").toLowerCase().trim();

    const triggers = ["@convoai", "@bot", "@ConvoAI"];
    const isTriggered = triggers.some((t) => text.includes(t));

    if (!isTriggered) {
      return null;
    }

    try {
      // Get Gemini API key from secret
      const apiKey = GEMINI_API_KEY.value();
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY not configured");
      }
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

      let prompt = message.text.trim();
      triggers.forEach((t) => {
        prompt = prompt.replace(new RegExp(t, "gi"), "").trim();
      });

      const fullPrompt = `
You are ConvoAI, a friendly, helpful and slightly witty AI assistant in a private chat app.
Respond naturally, concisely and conversationally in the same language as the user.
Keep replies under 3-4 sentences when possible.

User message: ${prompt || "Hi there"}

Reply:`;

      const result = await model.generateContent(fullPrompt);
      const replyText = result.response.text().trim();

      await admin.firestore()
        .collection(`rooms/${roomId}/messages`)
        .add({
          userId: "convoai-bot",
          senderName: "ConvoAI",
          profileUrl: "https://i.imgur.com/8Z0Zx9L.png", 
          text: replyText,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          isBot: true,
        });

      logger.info(`ConvoAI replied in room ${roomId}: ${replyText.substring(0, 100)}...`);
      return null;
    } catch (err) {
      logger.error("Gemini API error:", err.message || err);
      return null;
    }
  }
);