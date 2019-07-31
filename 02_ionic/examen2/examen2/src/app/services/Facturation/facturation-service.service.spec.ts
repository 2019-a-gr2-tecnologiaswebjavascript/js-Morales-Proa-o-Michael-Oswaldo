import { TestBed } from '@angular/core/testing';

import { FacturationServiceService } from './facturation-service.service';

describe('FacturationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacturationServiceService = TestBed.get(FacturationServiceService);
    expect(service).toBeTruthy();
  });
});
