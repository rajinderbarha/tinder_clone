import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function Iconbtn({onPress, color, size, icon}){
  return (
    <Pressable style={({pressed})=> pressed && {opacity : 0.5}} onPress={onPress}> 
        <Ionicons name={icon} size={size} color={color} />

    </Pressable>
  );
};
