import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { blurhash } from '../common/common';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ChatRoomHeader({user, router}) {
  return (
    <View className="flex-row justify-between items-center bg-white px-4 py-3">
        <Pressable onPress={()=> router.back()} className="flex-row items-center gap-3 flex-1">
            <AntDesign name="left" size={hp(2.8)} color="#737373" />
            <Image
                style={{height: hp(4.3), width: hp(4.3), borderRadius: 50}}
                source={{uri: user?.profileUrl}}
            />
            <Text style={{fontSize: hp(2)}} className="font-semibold text-neutral-700">{user?.username}</Text>
        </Pressable>
    </View>
  )
}
