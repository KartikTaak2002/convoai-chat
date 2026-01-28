import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/signUpScreen';
import SignInScreen from '../screens/signInScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack