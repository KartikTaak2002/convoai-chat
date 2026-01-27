import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

 const RootNavigator = () => {
  const isLoggedIn = false; 
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoggedIn ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default RootNavigator