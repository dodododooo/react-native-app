import React, { useState, useEffect } from 'react';
import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import AppNavigator from '@/router';
import useStore from '@/hooks/useStore';
import { observer } from "mobx-react";
import RNBootSplash from "react-native-bootsplash";
import theme from '@/style/theme.json';

console.log(global)

export default observer(() => {
  const { settingStore } = useStore();
  const [appTheme, setAppTheme] = useState(null);
  useEffect(() => {
    localStorage.getItem('appTheme').then(theme => {
      settingStore.setTheme(theme || 'light');
      setAppTheme(theme || 'light');
      RNBootSplash.hide({ fade: true });
    })
  }, []);
  return (appTheme && <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={{ ...eva[settingStore.theme], ...theme}}>
      <AppNavigator></AppNavigator>
    </ApplicationProvider>
  </>)
});
