import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from "./components/WelcomeScreen";

const App = () =>{
  return (
    <>
      <View
        style={{ flex: 1 }}>
        <LittleLemonHeader />
        <WelcomeScreen />
        <LittleLemonFooter />
      </View>
    </>
  );
}

export default App;
