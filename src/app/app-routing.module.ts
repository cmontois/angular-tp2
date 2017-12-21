import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemons/pokemon/pokemon.component';
import { PokedexComponent } from './pokemons/pokedex/pokedex.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: 'pokedex', component: PokedexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
