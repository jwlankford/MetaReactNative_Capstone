import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LlHeader from './components/LlHeader/LlHeader';
import LlFooter from './components/LlFooter/LlFooter';
import MenuItems from './components/MenuItems';
import LoginScreen from './components/LoginScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LlHeader />
        <LoginScreen />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
