/**
 * 全局属性和方法，非必要尽量不要挂载到全局
 */
import { Platform, Dimensions, StatusBar, PixelRatio } from 'react-native';
import * as storage from './storage';
import http from './http';

const { width, height } = Dimensions.get('window');
const { OS, Version } = Platform;
const isIPhoneX = OS === 'ios' && width == 375 && height == 812;

global.mDevice = {
  platform: OS,
  isAndroid: OS === 'android',
  isIOS: OS === 'ios',
  isWeb: OS === 'web',
  isIPhoneX,
  osVersion: Version,
}
global.mScreen = {
  width,
  height,
  statusBarHeight: OS === 'android' ? StatusBar.currentHeight : (isIPhoneX ? 44 : 20),
  pixelRatio: PixelRatio.get(),
}

global.localStorage = storage;
global.http = http;