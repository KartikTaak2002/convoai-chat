import { View, Text } from 'react-native'
import React from 'react'
import {useAuth} from '../store/authContext'

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