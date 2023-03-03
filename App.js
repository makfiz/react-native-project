import { useState, useEffect, useCallback } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigator } from './Navigation/Navigation';
export default function App() {
  const [userIsLoggin, setUserIsLoggin] = useState(false);
  const [iasReady, setIasReady] = useState(false);
  // const [User, setUser] = useState({
  //   login: null,
  //   email: null,
  //   password: null,
  // });

  const navigation = navigator(userIsLoggin);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIasReady(true);
      }
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (iasReady) {
      await SplashScreen.hideAsync();
    }
  }, [iasReady]);
  if (!iasReady) {
    return null;
  }
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>{navigation}</NavigationContainer>
    </View>
  );
}
