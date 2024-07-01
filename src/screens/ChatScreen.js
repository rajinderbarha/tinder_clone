import { Image, StyleSheet, Text, View } from "react-native";
import users from "../../assets/data/users";
import { FlatList } from "react-native";

export default function ChatScreen() {
  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>New Matches</Text>
        <Text style={styles.topText}>xxxx</Text>
      </View>
      <FlatList
        data={users}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.imgBox}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
        )}
      />
      <View style={{marginTop : 15, padding : 8}}>
        <Text style={styles.topText}> Messages </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 6,
    
  },
  topText: {
    fontSize: 20,
    fontWeight: "500",
  },
  imgBox: {
    height: 150,
    width: 100,
    borderWidth: 1,
    marginRight: 10,
    backgroundColor: "gold",
    padding: 2,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  
});
