import React from 'react';
import useStore from '@/hooks/useStore';
import { StatusBar } from 'react-native'
import { Button, Layout, Text, Modal, Card, useTheme } from '@ui-kitten/components';
import { observer } from "mobx-react";

export default observer(({navigation}) => {
  const { settingStore } = useStore();
  const [visible, setVisible] = React.useState(false);
  const theme = useTheme();
  return (
    <Layout style={{ flex: 1 }} level='2'>
      <StatusBar
        backgroundColor={theme['background-basic-color-1']}
        barStyle={settingStore.theme == 'dark' ? 'light-content' : 'dark-content'}
      ></StatusBar>
      <Text>appTheme: {settingStore.appTheme}</Text>
      <Text>systemTheme: {settingStore.systemTheme}</Text>
      <Text>theme: {settingStore.theme}</Text>
    </Layout>
  )
});
