import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const  LittleLemonFooter = () => {
  return (
    <View
      style={ welcomeScreenStyles.container }>
      <Text
        style={ welcomeScreenStyles.Copyright }>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

export default LittleLemonFooter;

const welcomeScreenStyles = StyleSheet.create({
  container: {
    flex: 0.10,
    backgroundColor: '#F4CE14',
    padding: 20,
  },
  Copyright: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  }
});