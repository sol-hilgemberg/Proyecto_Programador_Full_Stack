import { TestBed } from '@angular/core/testing';

import { AutenticacionServicioService } from './autenticacion-servicio.service';

describe('AutenticacionServicioService', () => {
  let service: AutenticacionServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
