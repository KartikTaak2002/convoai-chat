
import {StyleSheet, Text} from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
     <Text>Hi</Text>
     <Text>Hi</Text>
     <Text>Hi</Text>
     <Text>Hi</Text>
     <Text>Hi</Text>
     <Text>Hi</Text>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
