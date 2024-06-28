import { StyleSheet, View, ImageBackground, Text, Dimensions } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient"; 'expo-linear-gradient'

const screenWidth = Dimensions.get('screen').width;
export default function ImageCard({ user, style, isFirst }) {
  const { name, bio, image } = user;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const pan = Gesture.Pan().onUpdate(
    (event)=>{
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    }
  )
  .onEnd(()=>{
    translateX.value = 0;
    translateY.value = 0;
  })

  const animatedStyle = useAnimatedStyle(()=>({
    transform : [
      {  translateX : withSpring(translateX.value)  },
      {  translateY : withSpring(translateY.value)  },
      {
        rotateZ: `${interpolate(
          translateX.value,
          [-screenWidth / 2, 0, screenWidth / 2],
          [18, 0, -18]
        )}deg`,
      },
     
    ]    

  }))

  return (
    
    <GestureDetector gesture={pan}>
    <Animated.View style = {[styles.root, animatedStyle]}>
    <ImageBackground
      style={[styles.imgbox, style]}
      imageStyle={styles.img}
      source={{
        uri: image,
      }}
    >
      <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.4)']} // Adjust gradient colors as needed
            style={styles.gradient}
          >
      <View style={styles.textBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
      </LinearGradient>
    </ImageBackground>
    </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "90%",
    width: "100%",
    
    backgroundColor: "yellow",
    elevation: 18,
    // marginTop: 4,
    alignItems : 'center',
    position : 'absolute',
    top : 0,
    borderRadius : 8,
    overflow : 'hidden'
  },
  imgbox : {
    width: "100%", // Adjust width as needed
    height: "100%", // Adjust height as needed
    alignItems: "center",
    justifyContent: "center",
    backgroundColor : 'red',
    borderRadius : 8
    
  },
  img: {
    resizeMode: "cover",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    borderRadius : 8
  },
  textBox: {
    position: "absolute",
    bottom: 10,
    left: 8,
    padding: 12,
    
  },
  name: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "600",
    marginHorizontal: 1,
    marginVertical : 8
  },
  bio: {
    color: "#ffffff",
    fontSize: 18,
  },gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    
  },
});
