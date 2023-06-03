import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-web";

const green = "#00FF00";
const yellow = "#FFFF00";

const menuItemsToDisplay = [
    "Appetizers \n Entrees \n Desserts \n Drinks \n Appetizers \n Entrees \n Desserts \n Drinks \n Appetizers \n Entrees \n Desserts \n Drinks \n Appetizers \n Entrees \n Desserts \n Drinks \n Appetizers \n Entrees \n Desserts \n Drinks \n Appetizers \n Entrees \n Desserts \n Drinks"
];

const MenuItems = () => {
    return (
        <View style={{
            flex: 0.8 }}>
            <ScrollView
                horizontal={false}
                indicatorStyle={'white'}
                style={{
                    padding: 40,
                    backgroundColor: 'purple',
                     }}>
                        <Text
                            style={{
                                color: 'white',
                                paddingLeft: 40,
                                paddingRight: 40,
                                fontSize: 40,
                                fontWeight: 'bolder' }}>
                            View Menu:
                        </Text>
                        <Text
                            style={{
                                paddingLeft: 40,
                                paddingRight: 40,
                                fontSize: 40,
                                color: 'white',
                                flexWrap: 'wrap'}}>
                                {menuItemsToDisplay[0]}
                        </Text>
            </ScrollView>
        </View>
    )
}


export default MenuItems;
