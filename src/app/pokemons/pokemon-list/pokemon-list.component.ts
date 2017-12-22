import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../pokemon.service';

import { PokemonPayload } from '../pokemon-payload';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: Array<any>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe((pokemons: PokemonPayload) => {
      this.pokemons = pokemons.results;
      this.pokemons.map((pokemon, index) => pokemon.id = index+1);
      console.log(this.pokemons);
    });
  }
}
