import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import RootNavigator from './src/navigation/RootNavigator';
import './global.css';
import {AuthProvider} from './src/store/authContext';

enableScreens();

const App = () => {
  return (
    <AuthProvider>
          <RootNavigator />
    </AuthProvider>
  );
}


export default App;