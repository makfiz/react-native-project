import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserNav } from './userNav';
import RegistrationScreen from '../Screens/RegistrationScreen';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createStackNavigator();

export const AuthNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegistrationScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={UserNav}
      />
    </Stack.Navigator>
  );
};
