import React from 'react';
import { Button, Layout } from '@ui-kitten/components';

export default function Category({ navigation }) {
  return (
    <Layout style={{ flex: 1 }} level='2'>
      <Button
        onPress={() => navigation.navigate('GoodsDetail')}
      >跳转页面</Button>
    </Layout>
  )
}
