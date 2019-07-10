import { TestBed } from '@angular/core/testing';

import { EnmascaramientoService } from './enmascaramiento.service';

describe('EnmascaramientoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnmascaramientoService = TestBed.get(EnmascaramientoService);
    expect(service).toBeTruthy();
  });
});
