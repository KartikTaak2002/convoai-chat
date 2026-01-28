import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const SignInScreen = () => {
  return (
    <View className='flex-1'>
      <StatusBar barStyle="dark" />
      <View className='flex-1 gap-12' style={{paddingHorizontal:wp(5), paddingTop:hp(8)}}>
        <View className='items-center'>
          <Image style={{height:hp(25)}} resizeMode='contain' source={require('../../assets/images/login.png')} />

        </View>
        <View className='gap-1'>
          <Text className='tracking-wider text-center font-bold text-neutral-800' style={{fontSize:hp(4)}}>Sign In</Text>
          <View style={{height:hp(7)}} className='flex-row gap-4 px-4'>

          </View>
        </View>

      </View>

    </View>
  )
}

export default SignInScreen