import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async store(storageKey: string, value: any) {
    // const encryptedValue = btoa(escape(JSON.stringify(value)));
    const encryptedValue = JSON.stringify(value);
    await Storage.set({
      key: storageKey,
      value: encryptedValue
    });
  }

  // Get the value
  async get(storageKey: string) {
    const ret = await Storage.get({ key: storageKey });
    return JSON.parse(/* unescape(atob( */ret.value/* )) */);
  }

  async removeStorageItem(storageKey: string) {
    await Storage.remove({ key: storageKey });
  }

  // Clear storage
  async clear() {
    await Storage.clear();
  }

  devolverToken() {
    const user = Storage.get({ key: 'userData' });
    return this.get('userData').then(user => { return user.token });
  }

}