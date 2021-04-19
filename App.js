import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AppNavigator from '@/router';
import useStore from '@/hooks/useStore';
import { observer } from "mobx-react";
import RNBootSplash from "react-native-bootsplash";
import theme from '@/style/theme.json';
import Toast from "react-native-fast-toast";

export default observer(() => {
  const { settingStore } = useStore();
  const [appTheme, setAppTheme] = useState(null);
  useEffect(() => {
    localStorage.getItem('appTheme').then(res => {
      settingStore.setTheme(res || 'light');
      setAppTheme(res || 'light');
      RNBootSplash.hide({ fade: true });
    })
  }, []);
  return (appTheme && <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={{ ...eva[settingStore.theme], ...theme }}>
      <AppNavigator></AppNavigator>
    </ApplicationProvider>
    <Toast
      ref={(ref) => global['toast'] = ref}
      // duration={5000}
      // textStyle={{ fontSize: 20 }}
      // successColor="green"
      // dangerColor="red"
      // warningColor="orange"
    />
  </>)
});
