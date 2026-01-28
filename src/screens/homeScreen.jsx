import { View, Text, Pressable, ActivityIndicator, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/authContext'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ChatList from '../component/ChatList';
import Loading from '../component/Loading';
import HomeHeader from '../component/HomeHeader';
import { getDocs, query, where } from 'firebase/firestore';
import { usersRef } from '../../firebaseConfig';

const HomeScreen = () => {
    const {logout, user} = useAuth();
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        if(user?.uid)
            getUsers();
    },[])
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
    <View className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#4f46e5" />
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
  )
}

export default HomeScreen