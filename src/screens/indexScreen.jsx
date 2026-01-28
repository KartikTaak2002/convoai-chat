import { View, Text } from 'react-native'
import React from 'react'
import {useAuth} from '../store/authContext'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const IndexScreen = () => {
  const { user, isAuthenticated , login } = useAuth();
  console.log("Auth State:", { user, isAuthenticated });
  return (
    <View>
      <Text>indexScreen</Text>
    </View>
  )
}

export default IndexScreen