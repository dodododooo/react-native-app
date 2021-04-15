import { makeAutoObservable } from 'mobx';
export default class User {
  userInfo = {};
  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore;
  }
}