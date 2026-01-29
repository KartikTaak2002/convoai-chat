import { View, Text, StatusBar, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/authContext';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ChatList from '../components/ChatList';
import Loading from '../components/Loading';
import { getDocs, query, where } from 'firebase/firestore';
import { usersRef } from '../services/firebaseConfig';
import HomeHeader from '../components/HomeHeader';
import { MenuProvider } from 'react-native-popup-menu';

export default function HomeScreen() {
    const {logout, user} = useAuth();
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        if(user?.uid)
            getUsers();
    },[user])

    const getUsers = async ()=>{
        // fetch users
        const q = query(usersRef, where('userId', '!=', user?.uid));
        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach(doc=>{
            data.push({...doc.data()});
        });
        setUsers(data);
    }

    return (
        <MenuProvider>
            <View className="flex-1 bg-white">
                <StatusBar barStyle="light-content" />
                <HomeHeader />

                {
                    users.length>0? (
                        <ChatList currentUser={user} users={users} />
                    ):(
                        <View className="flex items-center" style={{top: hp(30)}}>
                            <ActivityIndicator size="large" />
                        </View>
                    )
                }
            </View>
        </MenuProvider>
    )
}
