import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          drawerStyle={{
            backgroundColor: "red",
            width: 240,
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Chat" component={Chat} />
          <Tab.Screen name="Category" component={Category} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }