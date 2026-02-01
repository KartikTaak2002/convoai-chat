import { View, Text, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function MessageItem({message, currentUser}) {

  const isMyMessage = currentUser?.uid === message?.userId;
  const isBot = message?.userId === "convoai-bot" || message?.isBot === true;

  if (isMyMessage) {
    // My own message (right side)
    return (
      <View className="flex-row justify-end mb-3 mr-3">
        <View style={{width: wp(80)}}>
          <View className="flex self-end p-3 rounded-2xl px-4 bg-indigo-600">
            <Text style={{fontSize: hp(1.9), color: 'white'}}>
              {message?.text}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  if (isBot) {
    // Bot / AI message (left side, special style)
    return (
      <View style={{width: wp(80)}} className="ml-3 mb-4">
        <View className="flex-row items-start gap-2">
          {/* Bot avatar */}
          <Image
            source={{ uri: message.profileUrl || "https://i.imgur.com/8Z0Zx9L.png" }}
            style={{ width: hp(4.5), height: hp(4.5), borderRadius: hp(4.5)/2 }}
          />
          <View className="flex-1">
            {/* Bot name + optional badge */}
            <View className="flex-row items-center gap-2 mb-1">
              <Text className="text-indigo-700 font-semibold text-sm">ConvoAI</Text>
              <View className="bg-indigo-100 px-1.5 py-0.5 rounded-full">
                <Text className="text-indigo-600 text-xs">AI</Text>
              </View>
            </View>
            {/* Message bubble */}
            <View className="p-3 px-4 rounded-2xl bg-indigo-50 border border-indigo-200 shadow-sm">
              <Text style={{fontSize: hp(1.9), color: '#1e293b'}}>
                {message?.text}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  // Other person's normal message (left side)
  return (
    <View style={{width: wp(80)}} className="ml-3 mb-3">
      <View className="flex self-start p-3 px-4 rounded-2xl bg-white border border-neutral-200">
        <Text style={{fontSize: hp(1.9)}}>
          {message?.text}
        </Text>
      </View>
    </View>
  )
}