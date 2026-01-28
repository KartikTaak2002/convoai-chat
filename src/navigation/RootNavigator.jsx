import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useAuth } from '../store/authContext';
import SplashScreen from '../screens/splashScreen';

const RootNavigator = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === undefined) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isAuthenticated ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
