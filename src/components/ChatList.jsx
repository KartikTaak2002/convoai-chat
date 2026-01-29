import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ChatItem from './ChatItem'

export default function ChatList({users, currentUser}) {
  return (
    <View className="flex-1">
      <FlatList
        data={users}
        contentContainerStyle={{flex: 1, paddingVertical: 25}}
        keyExtractor={item=> Math.random().toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index})=> <ChatItem 
            noBorder={index+1 == users.length} 
            currentUser={currentUser}
            item={item} 
            index={index} 
        />}
       />
    </View>
  )
}
