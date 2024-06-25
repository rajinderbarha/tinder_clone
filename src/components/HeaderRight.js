import { View } from "react-native";
import Colors from "../../constants/Colors";
import Iconbtn from "../util/IconBtn";
import { useNavigation } from "@react-navigation/native";

export default function HeaderRight() {
    const navigation = useNavigation();
    return (
      <View
        style={{
          flexDirection: "row",
          width: 120,
          padding: 10,
          justifyContent: "space-between",
        }}
      >
        <Iconbtn size={28} color={Colors.text} icon="notifications" onPress={()=>{navigation.navigate('Notifications')}}/>
        <Iconbtn size={28} color={Colors.text} icon="options" onPress={()=>{navigation.navigate('DiscoverySettings')}}/>
      </View>
    );
  }