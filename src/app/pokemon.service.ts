import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { PokemonPayload } from './pokemon-payload';

@Injectable()
export class PokemonService {

  private endpoint = 'pokemon';

  constructor(private http: HttpClient) { }

  //TODO add errorHandler for API call

  getPokemons (): Observable<PokemonPayload> {
    const url = `${environment.api_url}/${this.endpoint}/?limit=151`;
    return this.http.get<PokemonPayload>(url);
  }

  getInformationPokemon (id: number): Observable<PokemonPayload> {
    const url = `${environment.api_url}/${this.endpoint}/${id}/`;
    return this.http.get<PokemonPayload>(url);
  }

  getDescriptionPokemon (id: number): Observable<PokemonPayload> {
    const url = `${environment.api_url}/pokemon-species/${id}/`;
    return this.http.get<PokemonPayload>(url);
  }
}
