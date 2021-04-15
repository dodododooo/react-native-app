
import React from 'react';
import Home from './Home';
import Category from './Category';
import Cart from './Cart';
import User from './User';
import {
  Icon,
} from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
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

export default () => (
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