import { Button, Pressable, Text, View } from "react-native";
import ImageCard from "../components/ImageCard";
import { StyleSheet } from "react-native";
import users from "../../assets/data/users";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {} from 'react-native-gesture-handler'

export default function HomeScreen() {
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(translateX.value),
      },
    ],
  }));

  function pressHandel() {
    translateX.value = withSequence(
      withTiming(translateX.value - 50 , { duration: 250 }),
      withTiming(translateX.value = 0),
      withTiming(translateX.value + 50)
    );
  }

  return (
    <View style={styles.root}>
      <Animated.View style={[styles.image, animatedStyle]}>
        <ImageCard user={users[0]} />
        <Pressable style={styles.txt} onPress={pressHandel}>
          <Text style={styles.txt}>Click</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,

    // backgroundColor : 'red'
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  txt: {
    color: "black",
    fontSize: 22,
    position: "absolute",
    fontWeight: "bold",
    flex: 1,
    bottom: 0,
    alignSelf: "center",
  },
});
