import React from 'react'
import { Text } from 'react-native';
import useBackHandler from '@/hooks/useBackHandler';

export default function Cart({ navigation }) {
  useBackHandler(navigation.isFocused);
  return (
    <Text>
      cart
    </Text>
  )
}
