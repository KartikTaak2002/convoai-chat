import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../screens/indexScreen';
import SignUpScreen from '../screens/signUpScreen';
import SignInScreen from '../screens/signInScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {/* <Stack.Screen name="Index" component={IndexScreen} /> */}
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default AuthStack