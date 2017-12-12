import { TestBed, inject } from '@angular/core/testing';

import { PokemonTypeService } from './pokemon-type.service';

describe('PokemonTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonTypeService]
    });
  });

  it('should be created', inject([PokemonTypeService], (service: PokemonTypeService) => {
    expect(service).toBeTruthy();
  }));
});
