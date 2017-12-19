import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { PokemonPayload } from './pokemon-payload';

@Injectable()
export class PokemonTypeService {

  private endpoint = 'type';

  constructor(private http: HttpClient) { }

  //TODO add errorHandler for API call

  getType(type: string): Observable<PokemonPayload> {
    const url = `${environment.api_url}/${this.endpoint}/${type}/`;
    return this.http.get<PokemonPayload>(url);
  }
}
