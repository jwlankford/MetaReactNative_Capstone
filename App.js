import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LlHeader from './components/LlHeader/LlHeader';
import LlFooter from './components/LlFooter/LlFooter';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LlHeader />
        <MenuItems />
        <LlFooter />
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
