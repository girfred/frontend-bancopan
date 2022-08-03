import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);

    service.set('test', 'TESTING');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get', () => {
    expect(service.get('test')).not.toBeFalse();
  });
  
  it('Set', () => {
    const localAntes = service.get('test');
    service.set('test', 'TESTING AGAIN');
    const localDepois = service.get('test');
    expect(localDepois).not.toBe(localAntes);
  });

  it('Clear', () => {
    expect(service.clear()).toBeUndefined();
  });
});
