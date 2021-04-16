import React from 'react';
import { Text } from 'react-native';
import useBackHandler from '@/hooks/useBackHandler';
export default function User({ navigation }) {
  useBackHandler(navigation.isFocused);
  return (
    <Text>
      user
    </Text>
  )
}
