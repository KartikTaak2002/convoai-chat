import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { blurhash } from '../common/common';
import { getRoomId } from '../common/common';

export default function ChatItem({item, noBorder, router, currentUser}) {
  return (
    <Pressable onPress={()=> router.push({pathname: '/chatRoom', params: {userId: item?.userId, username: item?.username, profileUrl: item?.profileUrl}})} className="flex-1">
        <View className="flex-row justify-between items-center px-5 py-3 pb-8" style={{borderBottomWidth: noBorder? 0: 1, borderBottomColor: noBorder? 'transparent': '#f3f4f6'}}>
            <View className="flex-row gap-3 flex-1">
                <Image
                    style={{height: hp(6), width: hp(6), borderRadius: 50}}
                    source={{uri: item?.profileUrl}}
                />
                <View className="gap-1 flex-1">
                    <Text style={{fontSize: hp(1.8)}} className="font-semibold text-neutral-800">{item?.username}</Text>
                    <Text style={{fontSize: hp(1.6)}} className="font-normal text-neutral-600">How are you doing ?</Text>
                </View>
            </View>
        </View>
    </Pressable>
  )
}
