import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import useBackHandler from '@/hooks/useBackHandler';


export default function Category({ navigation }) {
  useBackHandler(navigation.isFocused);
  return (
    <Layout>
      <Button
        onPress={() => navigation.navigate('GoodsDetail')}
      >去详情页</Button>
    </Layout>
  )
}
