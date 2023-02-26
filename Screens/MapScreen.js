import React from 'react';
import { View, StyleSheet } from 'react-native';

export const MapScreen = ({ route }) => {
  const { longitude, latitude } = route.params.location;
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 15,
    // justifyContent: "center",
    // alignItems: "center",
    borderBottomColor: '#B3B3B3',
    borderTopColor: '#B3B3B3',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});
