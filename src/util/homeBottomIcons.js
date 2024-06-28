import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { View } from "react-native";

export default function HomeBotomIcons({nope}) {
  return (
    <>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          pressed && { backgroundColor: "#FBD88B", opacity : 0.9},
        ]} onPress={()=>{}}
      >
        <FontAwesome name="undo" size={24} color="#FBD88B" />
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.container2,
          pressed && { backgroundColor: "#F76C6B", opacity : 0.9 },
        ]} onPress={nope}
      >
        <Entypo name="cross" size={39} color="#F76C6B" />
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          pressed && { backgroundColor: "#3AB4CC" , opacity : 0.9},
        ]} onPress={()=>{}}
      >
        <FontAwesome name="star" size={24} color="#3AB4CC" />
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.container2,
          pressed && { backgroundColor: "#4FCC94" , opacity : 0.9},
        ]} onPress={()=>{}}
      >
        <FontAwesome name="heart" size={26} color="#4FCC94" />
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          pressed && { backgroundColor: "#A65CD2" , opacity : 0.9},
        ]} onPress={()=>{}}
      >
        <Ionicons name="flash" size={24} color="#A65CD2" />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 44,
    width: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },
  container2: {
    backgroundColor: "white",
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27.5,
  },
});
