// Classe pour typer les résultats des calls API
export class PokemonPayload {
  count:                number;
  previous:             string;
  names:                Array<any>;
  results:              Array<any>;
  flavor_text_entries:  Array<any>;
  height:               number;
  weight:               number;
  id:                   number;
  types:                Array<any>;
}
