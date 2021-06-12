import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Category from "../screens/Category";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Inicio") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Categoria") {
              iconName = focused ? "list" : "list";
            } else if (route.name === "Chat") {
              iconName = focused ? "chatbubbles" : "chatbubbles";
            } else if (route.name === "Perfil") {
              iconName = focused ? "build" : "build";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FFCB13",
          inactiveTintColor: "gray",
          style: { backgroundColor: '#3F3838'}
        }}
      >
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Categoria" component={Category} />
        <Tab.Screen name="Perfil" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
