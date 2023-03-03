import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RegistrationScreen from '../Screens/RegistrationScreen';
import LoginScreen from '../Screens/LoginScreen';

const MainTab = createBottomTabNavigator();

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
    </Stack.Navigator>
  );
};
