import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
export default function Category({ navigation }) {
  return (
    <Layout>
      <Button
        onPress={() => navigation.navigate('GoodsDetail')}
      >去详情页</Button>
    </Layout>
  )
}
