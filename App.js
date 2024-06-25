import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import FinderScreen from "./src/screens/FinderScreen";
import LikeScreen from "./src/screens/LikeScreen";
import ChatScreen from "./src/screens/ChatScreen";
import UserScreen from "./src/screens/UserScreen";
import TinderLogo from "./src/util/tinderLogo";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "./constants/Colors";
import HeaderRight from "./src/components/HeaderRight";
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from './src/screens/NotificationScreen';
import DiscoverySettingsScreen from './src/screens/DiscoverySettingsScreen';
import IconCont from './src/util/IconCont';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack(){
  return(
    <Stack.Navigator >
      <Stack.Screen name='Home' component={HomeScreen} options={{
      headerLeft: () => <TinderLogo />,
      headerTitle: "",
      headerRight: () => <HeaderRight />,
      }}/>
      <Stack.Screen name='Notifications' component={NotificationScreen} />
      <Stack.Screen name='DiscoverySettings' component={DiscoverySettingsScreen} options={{presentation : 'modal'}}/>
    </Stack.Navigator>
  )
}


export default function App() {
 

  return (
    <NavigationContainer>
      <Tab.Navigator
      
        screenOptions={{
          headerLeft: () => <TinderLogo />,
          headerTitle: "",
          
          tabBarActiveTintColor : Colors.primary,
          tabBarInactiveTintColor : Colors.text,
           tabBarIconStyle : {
            flex : 1,
            width : 11
           }
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            title: "",
            tabBarIcon: ({color, size}) => (
              <IconCont>
              <Image
                source={require("./assets/tinder/tinder.png")}
                style={[{ width: 24, height: 24}, {tintColor : color}]} 
              />
              </IconCont>
            ),headerShown : false
          }}
        />
        <Tab.Screen
          name="Finder"
          component={FinderScreen}
          options={{
            title: "",
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons 
                name="text-search"
                size={28}
                color={color}
              
              />
            ),
          }}
        />
        <Tab.Screen
          name="Likes"
          component={LikeScreen}
          options={{
            title: "",
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="shuriken"
                size={28}
                color={color}
                
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: "",
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name="logo-wechat"
                size={28}
                color={color}
                
              />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            title: "",
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name="person"
                size={28}
                color={color}
                
               
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
