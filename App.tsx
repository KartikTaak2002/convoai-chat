
import {StyleSheet, Text, useColorScheme} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

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
