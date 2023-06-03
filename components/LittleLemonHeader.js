import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.10, backgroundColor: '#F4CE14' }}>
        <Text
          style={{
            fontSize: 45,
            color: 'black',
            textAlign: 'center',
            fontWeight: '900',
          }}>
          The Little Lemon Restaurant
        </Text>
    </View>
  );
}