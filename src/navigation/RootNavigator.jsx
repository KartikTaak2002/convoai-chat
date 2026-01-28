import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useAuth } from '../store/authContext';
import SplashScreen from '../screens/splashScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === undefined) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? <AppStack /> : <AuthStack />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
