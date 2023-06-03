import React from "react";

import { View, Text } from "react-native";
import { ScrollView } from "react-native-web";

const WelcomeScreen = () =>{
    return (
        <View style={{ flex: 0.50 }}>
        <ScrollView
            horizontal={false}
            indicatorStyle={'white'}
            style={{
                backgroundColor: 'purple',
                    }}>
        <Text
        style={{
            paddingTop: 20,
            fontSize: 45,
            textAlign: 'center'
        }}
        >
            Welcome to Little Lemon Restaurant
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
        <Text style={{ paddingLeft: 40, paddingRight: 40, fontSize: 30, textAlign: 'center'}}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
        </ScrollView>
        </View>
    );
    }

export default WelcomeScreen;