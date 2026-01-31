import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard, StatusBar } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MessageList from '../components/MessageList';
import CustomKeyboardView from '../components/CustomKeyboardView';
import { useAuth } from '../store/authContext';
import { getRoomId } from '../utils/common';
import { Timestamp, addDoc, collection, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

export default function ChatRoomScreen({navigation}) {
    const route = useRoute();
    const item = route.params; // second user
    const {user} = useAuth(); // logged in user
    const [messages, setMessages] = useState([]);
    const textRef = useRef('');
    const inputRef = useRef(null);
    const scrollViewRef = useRef(null);
    useEffect(()=>{
        if(navigation && item?.userId) {
            navigation.setOptions({
                title: item?.username || '',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-left" size={hp(4)} color="#737373" />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <View className="flex-row items-center gap-8">
                        <Ionicons name="call" size={hp(2.8)} color={'#737373'} />
                        <Ionicons name="videocam" size={hp(2.8)} color={'#737373'} />
                    </View>
                )
            });
        }
    }, [item, navigation]);

    useEffect(()=>{
        createRoomIfNotExists();

        if(user?.uid && item?.userId) {
            let roomId = getRoomId(user?.uid, item?.userId);
            const docRef = doc(db, "rooms", roomId);
            const messagesRef = collection(docRef, "messages");
            const q = query(messagesRef, orderBy('createdAt', 'asc'));
            
            let unsub = onSnapshot(q, (snapshot)=>{
                let allMessages = snapshot.docs.map(doc=>{
                    return doc.data();
                });
                setMessages([...allMessages]);
            });

            const KeyboardDidShowListener = Keyboard.addListener(
                'keyboardDidShow', updateScrollView
            )

            return ()=>{
                unsub();
                KeyboardDidShowListener.remove();
            }
        }
    },[user?.uid, item?.userId]);

    useEffect(()=>{
        updateScrollView();
    },[messages])

    const updateScrollView = ()=>{
        setTimeout(()=>{
            scrollViewRef?.current?.scrollToEnd({animated: true})
        },100)
    }

    const createRoomIfNotExists = async ()=>{
        if(user?.uid && item?.userId) {
            let roomId = getRoomId(user?.uid, item?.userId);
            await setDoc(doc(db, "rooms", roomId), {
               roomId,
               createdAt: Timestamp.fromDate(new Date()) 
            });
        }
    }

    const handleSendMessage = async ()=>{
        let message = textRef.current.trim();
        if(!message) return;
        try{
            let roomId = getRoomId(user?.uid, item?.userId);
            const docRef = doc(db, 'rooms', roomId);
            const messagesRef = collection(docRef, "messages");
            textRef.current = "";
            if(inputRef) inputRef?.current?.clear();
            
            const newDoc = await addDoc(messagesRef, {
                userId: user?.uid,
                text: message,
                profileUrl: user?.providerData?.photoURL || "",
                senderName: user?.providerData?.displayName || "Unknown",
                createdAt: Timestamp.fromDate(new Date())
            });

            console.log('new message id: ', newDoc.id);
        }catch(err){
            Alert.alert('Message', err.message);
        }
    }

    return (
        <CustomKeyboardView inChat={true}>
            <View className="flex-1 bg-white">
                <StatusBar barStyle="dark-content" />
                <View className="h-3 border-b border-neutral-300" />
                
                <View className="flex-1 justify-between bg-neutral-100 overflow-visible">
                    <View className="flex-1">
                        <MessageList scrollViewRef={scrollViewRef} messages={messages} currentUser={user} />
                    </View>
                    
                    <View style={{marginBottom: hp(2.7)}} className="pt-2">
                        <View className="flex-row mx-3 justify-between bg-white border p-2 border-neutral-300 rounded-full pl-5">
                            <TextInput 
                                ref={inputRef}
                                onChangeText={value=> textRef.current = value}
                                placeholder='Type message...'
                                placeholderTextColor={'gray'}
                                style={{fontSize: hp(2)}}
                                className="flex-1 mr-2"
                            />
                            <TouchableOpacity onPress={handleSendMessage} className="bg-neutral-200 p-2 mr-[1px] rounded-full">
                                <Feather name="send" size={hp(2.7)} color="#737373" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </CustomKeyboardView>
    )
}
