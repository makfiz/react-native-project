import { useState, useEffect, useCallback } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { Main } from './main';
import { store } from './redux/store';

export default function App() {
  const [iasReady, setIasReady] = useState(false);

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
    <Provider store={store}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Main />
      </View>
    </Provider>
  );
}
