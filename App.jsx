import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import RootNavigator from './src/navigation/RootNavigator';
import './global.css';

enableScreens();

const App = () => {
  return (
        <SafeAreaProvider >
          <RootNavigator />
        </SafeAreaProvider>
  );
}


export default App;