//Angular Stuff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from '../app-routing.module';

//Angular Material Stuff
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

//Pokemon Module Stuff
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from './pokemon.service';
import { PokemonTypeService } from './pokemon-type.service';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    PokedexComponent,
    FilterPipe
  ],
  providers: [
    PokemonService,
    PokemonTypeService
  ],
})
export class PokemonsModule { }
