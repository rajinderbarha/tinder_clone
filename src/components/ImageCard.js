import { StyleSheet, View, ImageBackground, Text } from "react-native";

export default function ImageCard({user , style}) {

    const {name, bio, image} = user

  return (
    
      <ImageBackground 
        style={[styles.imgBox, style]}
        imageStyle={styles.img}
        source={{
          uri: image,
        }}
      >
        <View style = {styles.textBox}>
          <Text style = {styles.name}>{name}</Text>
          <Text style = {styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
  )
  
}

const styles = StyleSheet.create({

  imgBox: {
    height: "95%",
    width: "98%",
    alignItems : 'center',
    justifyContent : 'center',
    alignSelf : 'center' ,
    backgroundColor : 'yellow',
    elevation : 8,
    marginTop : 4
  },
  img: {
    resizeMode: "cover",
    overflow: "hidden",
    height : '100%',
    width : '100%'
  },
  textBox: {
    position : 'absolute',
    bottom : 10,
    left : 10,
    padding : 14,
  },
  name: {
    color : '#ffffff',
    fontSize : 24,
    fontWeight : '600',
    margin : 8
  },
  bio : {
    color : '#ffffff',
    fontSize : 18
  }
});
