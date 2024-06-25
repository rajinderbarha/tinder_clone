import { Pressable, StyleSheet, View } from "react-native";

export default function IconCont({children}){
  return (
    <Pressable style={({pressed})=>[styles.root, pressed && styles.pressed]}>
       
        {children}
      
    </Pressable>
  );
};

const styles = StyleSheet.create({
    root : {
        borderRadius : '40%',
        borderWidth : 1,
        alignItems : 'center',
        justifyContent : 'center',
        flex : 1
    },
    pressed : {
        backgroundColor : 'grey'
    }
});