import { initializeApp } from "firebase/app";
import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore';

// 1. create new project on firebase console
// 2. enable email and password auth provider in authentication
// 3. create a web app and copy the firebaseConfig below

const firebaseConfig = {
  apiKey: "AIzaSyB7j9YqCu1rKykvtaqmTwU12iGTGZXFIkA",
  authDomain: "convoai-chat.firebaseapp.com",
  projectId: "convoai-chat",
  storageBucket: "convoai-chat.firebasestorage.app",
  messagingSenderId: "756918330776",
  appId: "1:756918330776:web:e7f63b951a795d1e3077ed",
  measurementId: "G-9QVMGD69D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');


