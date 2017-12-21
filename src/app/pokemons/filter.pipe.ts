import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemons: any, args?: any): any {
    if(args === undefined) return pokemons;
    return pokemons.filter(function(pokemon){
      if(
        ('00' + pokemon.id).slice(-3).toString().includes(args) ||
        pokemon.name.toLowerCase().includes(args.toLowerCase())
      ) {
        return pokemon;
      }
    })
  }

}
