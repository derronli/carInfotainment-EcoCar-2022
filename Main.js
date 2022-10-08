import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import HomeScreen from "./screens/HomeScreen";
import MusicScreen from "./screens/MusicScreen";
import CarInfoScreen from "./screens/CarInfoScreen";

const homeName = "Home";
const musicName = "Music";
const carInfoName = "Car";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={musicName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = "home";
            } else if (rn === musicName) {
              iconName = "list";
            } else if (rn === carInfoName) {
              iconName = "settings";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: "#302c34",
            borderWidth: 0,
            flexDirection: "column",
          },
          tabBarActiveTintColor: "tomato",
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={musicName} component={MusicScreen} />
        <Tab.Screen name={carInfoName} component={CarInfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
