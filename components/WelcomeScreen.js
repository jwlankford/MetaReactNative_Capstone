import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-web";

const WelcomeScreen = () =>{
    return (
        <View style={ welcomeScreenStyles.container }>
        <ScrollView
            horizontal={false}
            indicatorStyle={'white'}
            style={welcomeScreenStyles.InnerContainer }>
        <Text style={welcomeScreenStyles.TextH1}>
            Welcome to Little Lemon Restaurant
        </Text>
        <Text style={ welcomeScreenStyles.TextGeneral }>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium varius neque, quis sodales est semper sit amet. Praesent et massa sed mi mattis interdum. Pellentesque in arcu molestie, tincidunt sapien scelerisque, tincidunt elit. Praesent luctus leo purus, quis faucibus magna consectetur at. Suspendisse ultricies porta libero, nec consectetur felis pretium ut. Etiam imperdiet eros sit amet vulputate fringilla. Sed eget accumsan dui, id tincidunt lacus. Sed commodo arcu aliquet eros ornare pharetra. Nulla enim diam, euismod in erat sed, eleifend ornare lacus. Nulla lacinia ultrices felis, ac euismod nunc dignissim eget. Nulla sit amet lectus elementum, lobortis dui eget, volutpat ipsum. Nullam dignissim augue vulputate tincidunt malesuada. Mauris suscipit consequat dui quis condimentum.</p>
        <p>Aliquam viverra semper ex eget rhoncus. Maecenas convallis sapien nec est commodo dignissim. Pellentesque molestie in magna a fermentum. Nulla ultrices tortor justo, id eleifend augue dictum ornare. Nulla pellentesque condimentum pretium. Curabitur tempus leo id enim gravida, vel elementum nibh cursus. Suspendisse ac nunc tellus. Curabitur quis aliquet dui, dictum ultricies orci. Ut massa turpis, volutpat sit amet scelerisque quis, cursus quis metus. Curabitur sit amet vestibulum turpis, vitae malesuada risus. Duis faucibus rhoncus cursus. Aliquam rutrum lacinia blandit.</p>
        <p>Sed eu imperdiet urna. Vivamus a tortor sed magna accumsan maximus eu a urna. Praesent et luctus est. Praesent et tempus tortor. Vestibulum at odio suscipit, pharetra urna accumsan, egestas metus. Nullam et tellus vulputate, convallis nunc et, ornare elit. Maecenas imperdiet felis at purus suscipit porttitor. Phasellus nunc sem, finibus id maximus vitae, ornare ut ipsum. Curabitur facilisis magna et condimentum blandit. Nunc non purus ut nisi facilisis scelerisque nec at orci. Donec fringilla interdum ipsum in scelerisque.</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras iaculis viverra ultricies. Pellentesque sed nunc lacus. Donec laoreet, eros nec luctus vestibulum, erat sem sagittis diam, euismod ornare justo magna nec urna. Donec rutrum nulla a malesuada ultrices. Sed auctor nisl a lacus tincidunt, vitae ullamcorper velit laoreet. Integer lacus enim, pharetra at felis euismod, interdum convallis lacus. Cras fringilla neque nec justo tempor rutrum. Mauris laoreet mi at tristique sollicitudin. Vestibulum condimentum ante eget lorem bibendum, gravida consectetur felis scelerisque. Pellentesque convallis sem a volutpat ultricies.</p>
        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sit amet imperdiet libero, non vulputate arcu. Suspendisse ut ex ac nulla rhoncus accumsan. Curabitur auctor erat suscipit eleifend consequat. Suspendisse ut nunc et tellus fermentum tincidunt. Aenean iaculis non nisl quis auctor. Duis malesuada nulla euismod massa facilisis, ac facilisis leo volutpat. Maecenas ullamcorper mattis tortor, eget ornare ligula consequat quis.</p>
        </Text>
        </ScrollView>
        </View>
    );
}

export default WelcomeScreen;

const welcomeScreenStyles = StyleSheet.create({
    container: {
        flex: 0.26,
    },
    InnerContainer: {
        backgroundColor: 'black'
    },
    TextH1: {
        paddingTop: 20,
        fontSize: 45,
        textAlign: 'center',
        color: 'white',
    },
    TextGeneral: {
        padding: 40,
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        marginVertical: 8,
    },
});