import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function TinderLogo() {
  return (
    <View style = {styles.container}>
      <Image style = {styles.logo} source={require("../../assets/tinder/tinder.png")} />
      <Text style = {styles.text}>tinder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        padding : 6
    },
    logo : {
        height : 25,
        width : 25,
        resizeMode : 'contain',
        marginLeft : 6,
        marginRight : 3
    },
    text : {
        color : Colors.primary,
        fontSize : 26,
        fontWeight : '600'
    },
});