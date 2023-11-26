import { TestBed } from '@angular/core/testing';

import { PokemonCapturadoService } from './pokemon-capturado.service';

describe('PokemonCapturadoService', () => {
  let service: PokemonCapturadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCapturadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
