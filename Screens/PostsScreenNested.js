import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CommentsScreen } from './CommentsScreen';
import { MapScreen } from './MapScreen';
import { PostsScreen } from './PostsScreen';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const NestedScreen = createStackNavigator();

export const PostsScreenNested = () => {
  const logout = () => console.log('logout');
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        options={{
          title: 'Posts',
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }} onPress={logout}>
              <MaterialIcons name="logout" size={24} color="#8F8F8F" />
            </TouchableOpacity>
          ),
        }}
        name="All Posts"
        component={PostsScreen}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={({ navigation }) => ({
          title: 'Comments',
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={27} color="#8F8F8F" />
            </TouchableOpacity>
          ),
        })}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => ({
          title: 'Map',
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={27} color="#8F8F8F" />
            </TouchableOpacity>
          ),
        })}
      />
    </NestedScreen.Navigator>
  );
};
