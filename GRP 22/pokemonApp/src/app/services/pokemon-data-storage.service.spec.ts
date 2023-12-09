import { TestBed } from '@angular/core/testing';

import { PokemonDataStorageService } from './pokemon-data-storage.service';

describe('PokemonDataStorageService', () => {
  let service: PokemonDataStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonDataStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
