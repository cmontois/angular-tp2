import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemons: any, args?: any): any {
    if(args === undefined) return pokemons;
    return pokemons.filter(function(pokemon){
      let pokemonNumber = ('00' + pokemon.id).slice(-3);
      if(
        pokemonNumber.toString().includes(args) ||
        pokemon.name.toLowerCase().includes(args.toLowerCase())
      )
        return pokemon;
    })
  }

}
