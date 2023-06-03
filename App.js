import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from "./components/WelcomeScreen";

const App = () =>{
  return (
    <>
      <View
        style={ mainStyles }>
        <LittleLemonHeader />
        <WelcomeScreen />
        <LittleLemonFooter />
      </View>
    </>
  );
}

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
