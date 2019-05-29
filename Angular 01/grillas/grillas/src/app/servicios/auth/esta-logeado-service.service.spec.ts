import { TestBed } from '@angular/core/testing';

import { EstaLogeadoServiceService } from './esta-logeado-service.service';

describe('EstaLogeadoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstaLogeadoServiceService = TestBed.get(EstaLogeadoServiceService);
    expect(service).toBeTruthy();
  });
});
