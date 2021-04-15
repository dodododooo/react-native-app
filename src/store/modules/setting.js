import { runInAction, makeAutoObservable } from 'mobx';
import { Appearance } from 'react-native';
export default class Setting {
  appTheme = 'light'; // system/dark/light
  systemTheme = Appearance.getColorScheme() || 'light';
  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore;
    Appearance.addChangeListener(({ colorScheme }) => {
      this.changeDarkMode(colorScheme);
    });
  }

  changeDarkMode (mode) {
    this.systemTheme = mode || 'light';
  }

  async setTheme (theme = 'light') {
    await localStorage.setItem('appTheme', theme);
    runInAction(() => {
      this.appTheme = theme;
    })
  }

  get theme () {
    let { appTheme, systemTheme } = this;
    return appTheme == 'system' ? systemTheme : appTheme;
  }

}