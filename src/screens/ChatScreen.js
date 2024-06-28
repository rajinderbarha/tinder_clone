import { Image, StyleSheet, Text, View} from "react-native";
import users from "../../assets/data/users";

export default function ChatScreen(){
  return (
    <View>
      <View style = {styles.topContainer}>
    <Text style = {styles.topText}>New Matches</Text>
    <Text style = {styles.topText}>xxxx</Text>

      </View>
      <View style = {styles.imgBox}>
      {users.map((user)=>(
          <Image style = {styles.image}  key={user.id} source={{uri : user.image}}/>
        ))}
        </View>
  </View>
  );
};

const styles = StyleSheet.create({
  topContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 10,
    margin : 10
  },
  topText : {
    fontSize : 20,
    fontWeight : '500'
  },
  imgBox : {
    height : 150,
    width : 100,
    borderWidth : 1,
    
    flexDirection : 'row',
    backgroundColor : 'red',
    padding : 5
  },
  image : {
    height : '100%',
    width : '100%'
  }
});