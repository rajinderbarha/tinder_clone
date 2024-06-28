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
import { Ionicons, MaterialCommunityIcons, Fontisto, FontAwesome  } from "@expo/vector-icons";
import Colors from "./constants/Colors";
import HeaderRight from "./src/components/HeaderRight";
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from './src/screens/NotificationScreen';
import DiscoverySettingsScreen from './src/screens/DiscoverySettingsScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();




 function BottomTabs () {
 

  return (
    
      <Tab.Navigator
      
        screenOptions={{
          
          headerShown : false, 
          
          tabBarActiveTintColor : Colors.primary,
          tabBarInactiveTintColor : Colors.text,
           tabBarIconStyle : {
            flex : 1,
            width : 11
           }
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "",
            tabBarIcon: ({color, size}) => (
              
              <Fontisto name='tinder' size={28} color={color} />
              
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
                name="star-four-points"
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
              <FontAwesome
                name="user"
                size={28}
                color={color}
                
               
              />
            ),
          }}
        />
      </Tab.Navigator>
   
  );
}


export default function App(){
  return(<>
  <GestureHandlerRootView>
  <StatusBar backgroundColor='black' />
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name='BottomTabs' component={BottomTabs} options={{
      headerLeft: () => <TinderLogo />,
      headerTitle: "",
      headerRight: () => <HeaderRight />,
      
      }}/>
      <Stack.Screen name='Notifications' component={NotificationScreen} />
      <Stack.Screen name='DiscoverySettings' component={DiscoverySettingsScreen} options={{presentation : 'modal'}}/>
    </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
    </>
  )
}