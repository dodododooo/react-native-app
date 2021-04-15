import '@/utils/global'; // 全局属性，第一个引入
import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
