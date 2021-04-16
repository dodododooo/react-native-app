import React from 'react';
import useStore from '@/hooks/useStore';
import { StatusBar } from 'react-native'
import { Button, Layout, Text, useTheme } from '@ui-kitten/components';
import { observer } from "mobx-react";
import useBackHandler from '@/hooks/useBackHandler';

export default observer(({navigation}) => {
  const { settingStore } = useStore();
  const theme = useTheme();
  useBackHandler(navigation.isFocused);
  return (
    <Layout style={{flex: 1}}>
      <StatusBar backgroundColor={theme['background-basic-color-1']}></StatusBar>
      <Text>appTheme: {settingStore.appTheme}</Text>
      <Text>systemTheme: {settingStore.systemTheme}</Text>
      <Text>theme: {settingStore.theme}</Text>
      <Button onPress={() => settingStore.setTheme('system')}>
        BUTTON
      </Button>
    </Layout>
  )
});
