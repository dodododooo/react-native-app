import { Button, Text } from '@ui-kitten/components';
import React, { Component } from 'react';
import StoreContext from '@/store/context';
import { observer } from 'mobx-react';

@observer
export default class Detail extends Component {
  static contextType = StoreContext;
  render() {
    let { settingStore } = this.context;
    return (<>
      <Text>{settingStore.theme}</Text>
      <Button onPress={() => settingStore.setTheme('dark')}>切换主题</Button>
      <Button onPress={() => this.props.navigation.navigate('Tabbar')}>去主页</Button>
    </>)
  }
}
