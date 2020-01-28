import { TestBed } from '@angular/core/testing';

import { GetPokemonService } from './get-pokemon.service';

describe('GetPokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPokemonService = TestBed.get(GetPokemonService);
    expect(service).toBeTruthy();
  });
});
