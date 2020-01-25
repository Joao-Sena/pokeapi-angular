import { TestBed } from '@angular/core/testing';

import { GetNomesService } from './get-nomes.service';

describe('GetNomesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetNomesService = TestBed.get(GetNomesService);
    expect(service).toBeTruthy();
  });
});
