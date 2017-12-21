import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PokemonService }  from '../pokemon.service';
import { PokemonTypeService } from '../pokemon-type.service';

import { Pokemon } from './pokemon';
import { PokemonPayload } from '../pokemon-payload';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon;
  isLoading: boolean;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private pokemonTypeService: PokemonTypeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = 1;
    this.isLoading = false;
    this.pokemon = new Pokemon();
    this.getInformationPokemon();
  }

  getInformationPokemon(): void {
    this.pokemonService.getInformationPokemon(this.id)
      .subscribe(pokemonInformation => {
          this.pokemon.height = pokemonInformation.height
          this.pokemon.weight = pokemonInformation.weight
          this.pokemon.id = pokemonInformation.id

          this.pokemon.types = [];
          for(let type in pokemonInformation.types) {
            //On pourrait directement faire appel à la propriété URL
            this.getTypeTranslation(pokemonInformation.types[type].type.name);
          }

          this.getDescriptionPokemon();
      });
  }

  getDescriptionPokemon(): void {
      this.pokemonService.getDescriptionPokemon(this.id)
        .subscribe(pokemonDescription => {
            this.pokemon.description = pokemonDescription.flavor_text_entries.find(obj => obj.language.name == 'fr').flavor_text;
            this.pokemon.name = pokemonDescription.names.find(obj => obj.language.name == 'fr').name;
            // Les données ont été chargées !
            this.isLoading = true;
            console.log(this.pokemon);
        });
  }

  getTypeTranslation(type: string): void {
    this.pokemonTypeService.getType(type)
      .subscribe(
        pokemonType => {
          this.pokemon.types.push(pokemonType.names.find(obj => obj.language.name == 'fr').name)
      });
  }

  goBack(): void {
    this.location.back();
  }
}
