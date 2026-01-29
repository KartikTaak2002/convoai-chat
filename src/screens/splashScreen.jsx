import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ConvoAI</Text>
      <ActivityIndicator size="large" color="#4f46e5" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#4f46e5',
  },
});

export default SplashScreen;
