import React from 'react';
import { Linking } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabbar from '@/pages/tabbar';
import GoodsDetail from '@/pages/goods/Detail';

const Stack = createStackNavigator();
const PERSISTENCE_KEY = 'NAVIGATION_STATE';

export default function AppNavigator() {
  const [isReady, setIsReady] = React.useState(__DEV__ ? false : true);
  const [initialState, setInitialState] = React.useState();
  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (!mDevice.isWeb && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const state = await localStorage.getItem(PERSISTENCE_KEY);

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) =>
        localStorage.setItem(PERSISTENCE_KEY, state)
      }
    >
      <Stack.Navigator headerMode='none' initialRouteName="Tabbar">
        <Stack.Screen name="Tabbar" component={Tabbar}></Stack.Screen>
        <Stack.Screen name="GoodsDetail" component={GoodsDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
