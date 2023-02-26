import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Screens/LoginScreen';
import Register from './Screens/RegistrationScreen';
import { PostsScreen } from './Screens/PostsScreen';
import { CreatePostsScreen } from './Screens/CreatePostsScreen';
import { CommentsScreen } from './Screens/CommentsScreen';
import { ProfileScreen } from './Screens/ProfileScreen';
import { MapScreen } from './Screens/MapScreen';
import { Home } from './Screens/HomeScreen';

const MainStack = createStackNavigator();
// const MainTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Registration" component={Register} />
        <MainStack.Screen name="Login" component={Login} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
