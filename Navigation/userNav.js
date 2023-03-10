import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/elements';

import { CreatePostsScreen } from '../Screens/CreatePostsScreen';
import { ProfileScreen } from '../Screens/ProfileScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { PostsScreenNested } from '../Screens/PostsScreenNested';

const MainTab = createBottomTabNavigator();

export const UserNav = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#FF6C00',
        tabBarStyle: {
          height: 80,
        },
        headerShown: true,
        headerLeftContainerStyle: {
          paddingLeft: 16,
        },
        headerRightContainerStyle: {
          paddingRight: 16,
        },
        headerTitleStyle: {
          color: '#212121',

          fontSize: 17,
        },
        tabBarItemStyle: {
          height: 40,
          width: 70,
          paddingHorizontal: 30,
          marginLeft: 25,
          marginRight: 25,
          borderRadius: 20,

          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <MainTab.Screen
        options={({ route }) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'Comments' || routeName === 'Map') {
              return { display: 'none' };
            }
            return { height: 80, paddingTop: 20, paddingLeft: 20 };
          })(route),
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <AntDesign
              name="appstore-o"
              size={size}
              color={focused ? '#fff' : '#8F8F8F'}
            />
          ),
        })}
        name="Posts"
        component={PostsScreenNested}
      />
      <MainTab.Screen
        options={({ navigation }) => ({
          title: 'Create a post',
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.navigate('Posts', { screen: 'Posts' })}
              backImage={() => (
                <AntDesign name="arrowleft" size={27} color="#8F8F8F" />
              )}
            />
          ),
          tabBarIcon: ({ focused, size }) => (
            <AntDesign
              name="plus"
              size={size}
              color={focused ? '#fff' : '#8F8F8F'}
            />
          ),
          tabBarStyle: {
            display: 'none',
          },
        })}
        name="Create"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={({ route }) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'Comments' || routeName === 'Map') {
              return { display: 'none' };
            }
            return { height: 80, paddingTop: 20, paddingRight: 20 };
          })(route),
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <Feather
              name="user"
              size={size}
              color={focused ? '#fff' : '#8F8F8F'}
            />
          ),
        })}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
