import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from "./components/WelcomeScreen";

const App = () =>{
  return (
    <>
      <View
        style={ styles }>
        <LittleLemonHeader />
        <WelcomeScreen />
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
