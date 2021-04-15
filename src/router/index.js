import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { useStore } from '@/hooks/useStore';

import Tabbar from '@/pages/tabbar';

import GoodsDetail from '@/pages/goods/Detail';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName="Tabbar">
        <Stack.Screen name="Tabbar" component={Tabbar}></Stack.Screen>
        <Stack.Screen name="GoodsDetail" component={GoodsDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
