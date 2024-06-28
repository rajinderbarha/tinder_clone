import {
  Button,
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
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
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import HomeBotomIcons from "../util/homeBottomIcons";

const { height, width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 120;

export default function HomeScreen() {
  const [data, setData] = useState(users);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  // const pan = Gesture.Pan().onUpdate((event) => {
  //   (translateX.value = event.translationX),
  //     (translateY.value = event.translationY);
  // }).onEnd(
  //   (event) => {
  //     (translateX.value = 0),
  //       (translateY.value = 0);
  //   }
  // )

  useEffect(() => {
    if(!data.length){
      setData(users)
    }
  }, [data]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(translateX.value),
      },
      {
        translateY: withSpring(translateY.value),
      },
    ],
  }));



  function removeFirst(){
    setData((prevData) => prevData.slice(1))
  }

  return (
    // {/* <GestureDetector gesture={pan} > */}
    <>
      <Animated.View style={[styles.image, animatedStyle]}>
        {data
          .map((users, index) => {
            let isFirst = index === 0;

            return <ImageCard user={users} key={users.id} isFirst={isFirst} />;
          })
          .reverse()}
      </Animated.View>
      <View style={styles.buttons}>
        <HomeBotomIcons nope={removeFirst} />
      </View>
    </>
    //  {/* </GestureDetector> */}
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  buttons: { width: "100%", 
    height: "10%",
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-around',
    padding : 4,
    backgroundColor : 'transparent',
    position : 'absolute',
    bottom : 15,
    paddingHorizontal : 10,
    
  },

  image: {
    height: "90%",
    width: "98%",

    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "row",
    alignSelf: "center",
    marginTop : 6
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
