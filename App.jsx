import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import './global.css';

const App = () => {
  return (
    // <SafeAreaProvider>
      <RootNavigator />
    // </SafeAreaProvider>
  );
}


export default App;