//Angular Stuff
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }     from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Project Module(s)
import { PokemonsModule } from './pokemons/pokemons.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokemonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
