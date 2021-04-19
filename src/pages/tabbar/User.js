import React from 'react';
import { Layout, Radio, RadioGroup } from '@ui-kitten/components';
import { Text } from 'react-native';
import { observer } from "mobx-react";
export default observer(({ navigation }) => {
  const { settingStore } = useStore();
  const enumMap = {
    0: 'system',
    1: 'dark',
    2: 'light',
    system: 0,
    dark: 1,
    light: 2,
  }
  return (
    <Layout style={{ flex: 1 }} level='2'>
      <RadioGroup
        selectedIndex={enumMap[settingStore.appTheme]}
        onChange={index => settingStore.setTheme(enumMap[index])}
      >
        <Radio>跟随系统</Radio>
        <Radio>深色</Radio>
        <Radio>浅色</Radio>
      </RadioGroup>
    </Layout>
  )
})
