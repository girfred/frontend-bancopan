import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let localStorage: LocalStorageService;
  let storageAntes: string | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsersService]
    });
    service = TestBed.inject(UsersService);
    localStorage = TestBed.inject(LocalStorageService);

    localStorage.set('users', '[{"name":"My name 1","cpf":"04080757247","phone":"11987654321","email":"myemail1@test.com.br"},{"name":"My name 2","cpf":"77797584192","phone":"11987654321","email":"myemail2@test.com.br"},{"name":"My name 3","cpf":"45486737688","phone":"11987654321","email":"myemail3@test.com.br"}]');
    storageAntes = service.getLocal();
  });

  afterEach(() => {
    setTimeout(() => {}, 3000);
  });

  afterAll(() => {
    service.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Pegar da API', () => {
    service.getApi().subscribe(users => {
      expect(users).toBeTruthy();
    });
  });

  it('Pegar do Local', () => {
    expect(service.getLocal()).toBeTruthy();
  })

  it('Insert', () => {
    service.insert({
      name: 'Teste',
      cpf: 123456789,
      phone: 555555,
      email: 'teste@teste'
    });
    let storageDepois = service.getLocal();
    expect(storageDepois).not.toEqual(storageAntes);
  });

  it('Update', () => {
    service.update(0, {
      name: 'Teste',
      cpf: 123456789,
      phone: 555555,
      email: 'teste@teste'
    });
    let storageDepois = service.getLocal();
    expect(storageDepois).not.toEqual(storageAntes);
  });

  it('Delete', () => {
    let storage = [];
    if(storageAntes) {
      storage = JSON.parse(storageAntes);
    }
    storage.splice(1, 1);
    service.delete(JSON.stringify(storage));
    let storageDepois = service.getLocal();

    expect(storageDepois).not.toEqual(storageAntes);
  });
});
