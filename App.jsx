import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "./global.css";
import { AuthContextProvider } from './src/store/authContext';
import { MenuProvider } from 'react-native-popup-menu';
import { enableScreens } from 'react-native-screens';
import RootNavigator from './src/navigation/RootNavigator';

enableScreens();

const App = () => {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <AuthContextProvider>
          <RootNavigator />
        </AuthContextProvider>
      </MenuProvider>
    </SafeAreaProvider>
  );
}

export default App;