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
    <Layout style={{flex: 1}}>
      <StatusBar backgroundColor={theme['background-basic-color-1']}></StatusBar>
      <Text>appTheme: {settingStore.appTheme}</Text>
      <Text>systemTheme: {settingStore.systemTheme}</Text>
      <Text>theme: {settingStore.theme}</Text>
      <Button onPress={() => settingStore.setTheme('system')}>
        BUTTON
      </Button>
      <Button onPress={() => setVisible(true)}>
        TOGGLE MODAL
      </Button>

      <Modal
        visible={visible}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text>Welcome to UI Kitten 😻</Text>
          <Button onPress={() => setVisible(false)}>
            DISMISS
          </Button>
        </Card>
      </Modal>
    </Layout>
  )
});
