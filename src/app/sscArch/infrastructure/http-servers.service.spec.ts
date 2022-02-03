import { TestBed } from '@angular/core/testing';

import { HttpServersService } from './http-servers.service';

describe('HttpServersService', () => {
  let service: HttpServersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
