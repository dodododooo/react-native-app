import React from 'react';
import Home from './Home';
import Category from './Category';
import Cart from './Cart';
import User from './User';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { useBackHandler } from '@react-native-community/hooks';
import { BackHandler } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    appearance='noIndicator'
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab
      icon={(props) => <Icon {...props} name='home-outline' />}
      title='首页'
    />
    <BottomNavigationTab
      icon={(props) => <Icon {...props} name='grid-outline' />}
      title='分类'
    />
    <BottomNavigationTab
      icon={(props) => <Icon {...props} name='shopping-cart-outline' />}
      title='购物车'
    />
    <BottomNavigationTab
      icon={(props) => <Icon {...props} name='person-outline' />}
      title='我的'
    />
  </BottomNavigation>
);

export default ({ navigation }) => {
  const lastBackTime = React.useRef(0);
  useBackHandler(() => {
    if (navigation.isFocused()) {
      const now = Date.now();
      const lastTime = lastBackTime.current;
      lastBackTime.current = now;
      if (now - lastTime > 1500) {
        toast.show('再次返回退出应用');
      } else {
        BackHandler.exitApp();
      }
      return true;
    }
    lastBackTime.current = 0;
    return false;
  })
  return (
    <Tab.Navigator
      backBehavior="history"
      tabBar={props => <BottomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  )
}