import React from 'react';
import useStore from '@/hooks/useStore';
import { Button, Layout, Text } from '@ui-kitten/components';
import { observer } from "mobx-react";

export default observer(() => {
  const { settingStore } = useStore();
  return (
    <Layout style={{flex: 1}}>
      <Text>appTheme: {settingStore.appTheme}</Text>
      <Text>systemTheme: {settingStore.systemTheme}</Text>
      <Text>theme: {settingStore.theme}</Text>
      <Button onPress={() => settingStore.setTheme('system')}>
        BUTTON
      </Button>
    </Layout>
  )
});
