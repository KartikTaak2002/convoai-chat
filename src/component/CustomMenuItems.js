import React from 'react'
import { Pressable, Text } from 'react-native'

export const MenuItem = ({text, action, value, icon})=>{
    return (
        <Pressable onPress={()=> action(value)} className="flex-row items-center px-4 py-3 gap-3">
            {icon}
            <Text style={{fontSize: 16}} className="font-medium text-neutral-700">
                {text}
            </Text>
        </Pressable>
    )
}
