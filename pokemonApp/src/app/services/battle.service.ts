import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  private pokemon1AbilitiesCountSubject = new BehaviorSubject<number>(0);
  private pokemon2AbilitiesCountSubject = new BehaviorSubject<number>(0);

  pokemon1AbilitiesCount$ = this.pokemon1AbilitiesCountSubject.asObservable();
  pokemon2AbilitiesCount$ = this.pokemon2AbilitiesCountSubject.asObservable();

  setPokemon1AbilitiesCount(count: number) {
    this.pokemon1AbilitiesCountSubject.next(count);
  }

  setPokemon2AbilitiesCount(count: number) {
    this.pokemon2AbilitiesCountSubject.next(count);
  }

  determineBattleResult() {
    const pokemon1Count = this.pokemon1AbilitiesCountSubject.value;
    const pokemon2Count = this.pokemon2AbilitiesCountSubject.value;

    console.log(`Pokemon 1 Count: ${pokemon1Count}`);
    console.log(`Pokemon 2 Count: ${pokemon2Count}`);

    if (pokemon1Count === pokemon2Count) {
      return 'Empate';
    } else if (pokemon1Count > pokemon2Count) {
      return 'Ganhou';
    } else {
      return 'Perdeu';
    }
  }
}
