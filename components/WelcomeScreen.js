import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-web";

const WelcomeScreen = () =>{
    return (
        <View style={ welcomeScreenStyles.container }>
        <ScrollView
            horizontal={false}
            indicatorStyle={'white'}
            style={welcomeScreenStyles.ScrollView}>
        <Text style={welcomeScreenStyles.TextH1}>
            Welcome to Little Lemon Restaurant
        </Text>
        <Text style={ welcomeScreenStyles.TextGeneral }>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
        <Text style={{ paddingLeft: 40, paddingRight: 40, fontSize: 30, textAlign: 'center'}}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
        <Text style={{ paddingLeft: 40, paddingRight: 40, fontSize: 30, textAlign: 'center'}}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
        <Text style={{ paddingLeft: 40, paddingRight: 40, fontSize: 30, textAlign: 'center'}}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
        <Text style={{ paddingLeft: 40, paddingRight: 40, fontSize: 30, textAlign: 'center'}}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
        <Text style={{ paddingLeft: 40, paddingRight: 40, fontSize: 30, textAlign: 'center'}}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
        <Text style={{ paddingLeft: 40, paddingRight: 40, fontSize: 30, textAlign: 'center'}}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
        <Text style={{ paddingLeft: 40, paddingRight: 40, fontSize: 30, textAlign: 'center'}}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
        </ScrollView>
        </View>
    );
}

export default WelcomeScreen;

const welcomeScreenStyles = StyleSheet.create({
    container: {
        flex: 0.50
    },
    ScrollView: {
        backgroundColor: 'purple'
    },
    TextH1: {
        paddingTop: 20,
        fontSize: 45,
        textAlign: 'center',
        color: 'white',
    },
    TextGeneral: {
        paddingTop: 20,
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
    },
});