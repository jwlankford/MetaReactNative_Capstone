import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        flex: 0.10,
        backgroundColor: '#F4CE14',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}