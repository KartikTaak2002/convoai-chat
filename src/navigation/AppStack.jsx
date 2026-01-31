import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import ChatRoomScreen from '../screens/chatRoomScreen';
import ProfileScreen from '../screens/profileScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: 'Profile',
        }} 
      />
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen}
        options={{
          headerShown: true
        }} 
      />
    </Stack.Navigator>
  );
}

export default AppStack;