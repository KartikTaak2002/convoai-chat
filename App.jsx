import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import RootNavigator from './src/navigation/RootNavigator';
import './global.css';
import {AuthContextProvider} from './src/store/authContext';

enableScreens();

const App = () => {
  return (
    <SafeAreaProvider>
    <AuthContextProvider>
          <RootNavigator />
    </AuthContextProvider>
    </SafeAreaProvider>
  );
}


export default App;