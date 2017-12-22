import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemons/pokemon/pokemon.component';
import { PokedexComponent } from './pokemons/pokedex/pokedex.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokedex/1', pathMatch: 'full' },
  { path: 'pokedex/:id', component: PokedexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
