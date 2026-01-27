import {StyleSheet, View,Text } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


function App() {
  return (
    <SafeAreaProvider>
      <Text>"HI"</Text>
       <Text>"HI"</Text>
        <Text>"HI"</Text>
         <Text>"HI"</Text>
         <Text>"HI"</Text>
         <Text>"HI"</Text>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
