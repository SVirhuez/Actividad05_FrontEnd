import { TestBed } from '@angular/core/testing';

import { CicloService } from './ciclo.service';

describe('CicloService', () => {
  let service: CicloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CicloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
