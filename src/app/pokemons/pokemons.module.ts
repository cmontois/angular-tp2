//Angular Stuff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

//Angular Material Stuff
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//Pokemon Module Stuff
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from './pokemon.service';
import { PokemonTypeService } from './pokemon-type.service';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule,
    AppRoutingModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    PokemonComponent,
    PokemonListComponent
  ],
  providers: [
    PokemonService,
    PokemonTypeService
  ],
})
export class PokemonsModule { }
