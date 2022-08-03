import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';

import { User } from '../shared/models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private key = 'users';
  private change = new BehaviorSubject('Atualizado');
  private url: string = 'https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users';

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  checkStorage() {
    return this.change.asObservable();
  }

  getLocal() {
    return this.localStorage.get('users');
  }

  getApi(): Observable<User[]> {
		return this.http.get<User[]>(this.url);
	}

  insert(value: any) {
    let storage = this.getLocal();
    if (storage) {
      let users = JSON.parse(storage);
      users.push(value);
      this.localStorage.set(this.key, JSON.stringify(users));
      this.change.next(value);
    } else {
      this.localStorage.set(this.key, value);
      this.change.next(value);
    }
  }

  update(index: number, value: any) {
    let storage = this.getLocal();
    if (storage) {
      let users = JSON.parse(storage);
      users[index] = value;
      this.localStorage.set(this.key, JSON.stringify(users));
      this.change.next(value);
    }
  }

  delete(value: string) {
    this.localStorage.set(this.key, value);
    this.change.next(value);
  }

  clear() {
    this.localStorage.clear();
  }
}
