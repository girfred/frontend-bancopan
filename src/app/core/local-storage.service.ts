import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, value: string) {
    return this.storage.setItem(key, value);
  }

  clear() {
    return this.storage.clear();
  }
}
