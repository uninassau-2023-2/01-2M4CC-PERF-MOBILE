import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PokemonCapturadoService } from './pokemon-capturado.service';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  private pokemon1AbilitiesCountSubject = new BehaviorSubject<number>(0);
  private pokemon2AbilitiesCountSubject = new BehaviorSubject<number>(0);
  private battleResultSubject = new BehaviorSubject<string>('');
  private pokemon1IndexSubject = new BehaviorSubject<number>(0);
  
  pokemon1Index$ = this.pokemon1IndexSubject.asObservable();
  pokemon1AbilitiesCount$ = this.pokemon1AbilitiesCountSubject.asObservable();
  pokemon2AbilitiesCount$ = this.pokemon2AbilitiesCountSubject.asObservable();
  battleResult$ = this.battleResultSubject.asObservable();

  constructor(private pokemonCapturadoService: PokemonCapturadoService) {}

  getResultadoBatalha(): Observable<string> {
    this.battleResultSubject.next('');
    return this.battleResultSubject.asObservable();
  }

  setPokemon1Index(index: number) {
    this.pokemon1IndexSubject.next(index);
  }

  setPokemon1AbilitiesCount(count: number) {
    console.log('Definindo contagem de habilidades para Pokemon 1:', count);
    this.pokemon1AbilitiesCountSubject.next(count);
  }
  
  setPokemon2AbilitiesCount(count: number) {
    console.log('Definindo contagem de habilidades para Pokemon 2:', count);
    this.pokemon2AbilitiesCountSubject.next(count);
  }

  registrarResultadoBatalha(pokemon1Index: number, pokemon2Index: number) {
    console.log('Registrando resultado de batalha...');
    const resultadoPokemon1 = this.determineBattleResult();
    const resultadoPokemon2 = this.determineBattleResult();
    console.log('Resultado da batalha para Pokemon 1:', resultadoPokemon1);
    console.log('Resultado da batalha para Pokemon 2:', resultadoPokemon2);
  
    this.pokemonCapturadoService.atualizarResultadoBatalha(pokemon1Index, resultadoPokemon1);
    this.pokemonCapturadoService.atualizarResultadoBatalha(pokemon2Index, resultadoPokemon2);
}

  determineBattleResult() {
    const pokemon1Count = this.pokemon1AbilitiesCountSubject.value;
    const pokemon2Count = this.pokemon2AbilitiesCountSubject.value;
  
    console.log(`Pokemon 1 Count: ${pokemon1Count}`);
    console.log(`Pokemon 2 Count: ${pokemon2Count}`);
  
    let result = '';
    if (pokemon1Count === pokemon2Count) {
      result = 'Empate';
    } else if (pokemon1Count > pokemon2Count) {
      result = 'Ganhou';
    } else {
      result = 'Perdeu';
    }
  
    console.log('Resultado da batalha:', result);
    return result;
  }

  updateBattleResult(result: string) {
    console.log('Atualizando resultado de batalha:', result);
    this.battleResultSubject.next(result);
  }
}
