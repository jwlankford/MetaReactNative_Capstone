import { View, Text, StyleSheet } from 'react-native';

const LittleLemonHeader = () => {
  return (
    <View style={ welcomeScreenStyles.container }>
        <Text
          style={ welcomeScreenStyles.Title }>
          The Little Lemon Restaurant
        </Text>
    </View>
  );
}

export default LittleLemonHeader;

const welcomeScreenStyles = StyleSheet.create({
  container: {
      flex: 0.10,
      backgroundColor: '#F4CE14'
  },
  Title: {
      fontSize: 45,
      color: 'black',
      textAlign: 'center',
      fontWeight: '900',
  }
});

