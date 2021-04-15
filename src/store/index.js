import UserStore from './modules/user';
import SettingStore from './modules/setting';

class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.settingStore = new SettingStore(this);
  }
}


export default RootStore;