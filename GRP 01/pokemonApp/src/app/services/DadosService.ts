import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  public dados: Pokemon[] = [];

  constructor() {}

  adicionarPokemon(nome: string): void {
    const novoPokemon: Pokemon = {
      name: nome,
      vitorias: 0,
      derrotas: 0,
      empates: 0,
    };

    this.dados.push(novoPokemon);
  }
  adicionarPokemonempate(nome: string): void {
    const novoPokemon: Pokemon = {
      name: nome,
      vitorias: 0,
      derrotas: 0,
      empates: 1,
    };

    this.dados.push(novoPokemon);
  }
  adicionarPokemonvitoria(nome: string): void {
    const novoPokemon: Pokemon = {
      name: nome,
      vitorias: 1,
      derrotas: 0,
      empates: 0,
    };

    this.dados.push(novoPokemon);
  }

  adicionarPokemonderrota(nome: string): void {
    const novoPokemon: Pokemon = {
      name: nome,
      vitorias: 0,
      derrotas: 1,
      empates: 0,
    };

    this.dados.push(novoPokemon);
  }
  atualizarPokemon(nome: string, vitorias: number, derrotas: number, empates: number): void {
    const pokemon = this.encontrarPokemon(nome);

    if (pokemon) {
      pokemon.vitorias = vitorias;
      pokemon.derrotas = derrotas;
      pokemon.empates = empates;
    } else {
      console.error(`Pokemon ${nome} não encontrado.`);
    }
  }

  atualizarPokemonempate(nome: string): void {
    const pokemon = this.encontrarPokemon(nome);

    if (pokemon) {      
      pokemon.empates++;
    } else {
      console.error(`Pokemon ${nome} não encontrado.`);
    }
  }
  atualizarPokemonvitoria(nome: string): void {
    const pokemon = this.encontrarPokemon(nome);

    if (pokemon) {      
      pokemon.vitorias++;
    } else {
      console.error(`Pokemon ${nome} não encontrado.`);
    }
  }
  atualizarPokemonderrota(nome: string): void {
    const pokemon = this.encontrarPokemon(nome);

    if (pokemon) {      
      pokemon.derrotas++;
    } else {
      console.error(`Pokemon ${nome} não encontrado.`);
    }
  }

  obterQuantidadeEmpates(nome: string): any {
    const pokemon = this.encontrarPokemon(nome);

    if (pokemon) {
      return pokemon.empates;
    } else {      
    }
  }

  obterQuantidadeVitorias(nome: string): any  {
    const pokemon = this.encontrarPokemon(nome);

    if (pokemon) {
      return pokemon.vitorias;
    } else {      
    }
  }

  obterQuantidadeDerrotas(nome: string): any  {
    const pokemon = this.encontrarPokemon(nome);

    if (pokemon) {
      return pokemon.derrotas;
    } else {    
    }
  }

  encontrarPokemon(nome: string): Pokemon | undefined {
    return this.dados.find((pokemon) => pokemon.name === nome);
  }

  pokemonExiste(nome: string): boolean {
    return this.dados.some((pokemon) => pokemon.name === nome);
  }
}

interface Pokemon {
  name: string;
  vitorias: number;
  derrotas: number;
  empates: number;
}
