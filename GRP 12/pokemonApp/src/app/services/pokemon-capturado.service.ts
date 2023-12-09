import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonCapturadoService {
  private pokemonsCapturados: any[] = [];
  private pokemonsCapturadosSubject = new BehaviorSubject<any[]>(this.pokemonsCapturados);
  pokemonsCapturados$ = this.pokemonsCapturadosSubject.asObservable();

  adicionarPokemonCapturado(pokemon: any) {
    const novoPokemon = {
      ...pokemon,
      vitorias: 0,
      derrotas: 0,
      empates: 0,
      front_default: pokemon.sprites.front_default 
    };

    this.pokemonsCapturados.push(novoPokemon);
    const index = this.pokemonsCapturados.length - 1;
    this.pokemonsCapturadosSubject.next([...this.pokemonsCapturados]);

    return index;
  }

  adicionarNovoPokemonCapturado() {
    const novoPokemon = {
      vitorias: 0,
      derrotas: 0,
      empates: 0,
      front_default: ''
    };

    this.pokemonsCapturados.push(novoPokemon);
    const index = this.pokemonsCapturados.length - 1;
    this.pokemonsCapturadosSubject.next([...this.pokemonsCapturados]);

    return index;
  }

  getPokemonsCapturados() {
    return this.pokemonsCapturados;
  }

  atualizarResultadoBatalha(index: number, resultado: string) {
    console.log('Atualizando resultado de batalha para o Pokémon no índice:', index);
    console.log('Novo resultado:', resultado);
  
    const pokemon = this.pokemonsCapturados[index];
  
    if (resultado === 'Ganhou' && pokemon.vitorias !== undefined) {
      this.incrementarVitorias(pokemon);
    } else if (resultado === 'Perdeu' && pokemon.derrotas !== undefined) {
      this.incrementarDerrotas(pokemon);
    } else if (resultado === 'Empate' && pokemon.empates !== undefined) {
      this.incrementarEmpates(pokemon);
    }

    this.pokemonsCapturadosSubject.next([...this.pokemonsCapturados]);
}

  incrementarVitorias(pokemon: any) {
    console.log('Incrementando vitória para o Pokémon no índice:', this.pokemonsCapturados.indexOf(pokemon));
    pokemon.vitorias++;

    this.pokemonsCapturadosSubject.next([...this.pokemonsCapturados]);
  }

  incrementarDerrotas(pokemon: any) {
    console.log('Incrementando derrota para o Pokémon no índice:', this.pokemonsCapturados.indexOf(pokemon));
    pokemon.derrotas++;

    this.pokemonsCapturadosSubject.next([...this.pokemonsCapturados]);
  }

  incrementarEmpates(pokemon: any) {
    console.log('Incrementando empate para o Pokémon no índice:', this.pokemonsCapturados.indexOf(pokemon));
    pokemon.empates++;

    this.pokemonsCapturadosSubject.next([...this.pokemonsCapturados]);
  }
}
