import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PokemonCapturadoService } from '../services/pokemon-capturado.service';
import { BattleService } from '../services/battle.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy {
  pokemonList: any[] = [];
  private pokemonCapturadoSubscription: Subscription | undefined;
  private battleResultSubscription: Subscription | undefined;

  constructor(
    private pokemonCapturadoService: PokemonCapturadoService,
    private battleService: BattleService
  ) {}

  ngOnInit() {
    this.pokemonCapturadoSubscription = this.pokemonCapturadoService.pokemonsCapturados$.subscribe(pokemonsCapturados => {
      console.log('Pokemons Capturados Atualizados:', pokemonsCapturados);
      this.pokemonList = pokemonsCapturados;
    });

    this.battleResultSubscription = this.battleService.pokemon1Index$.pipe(
      switchMap(pokemon1Index => this.battleService.getResultadoBatalha())
    ).subscribe(result => {
      if (result) {
        console.log('Resultado da Batalha:', result);

        if (this.pokemonList.length > 0) {
          const lastPokemonIndex = this.pokemonList.length - 1;
          this.pokemonCapturadoService.atualizarResultadoBatalha(lastPokemonIndex, result);
        }
      }
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
    if (this.pokemonCapturadoSubscription) {
      this.pokemonCapturadoSubscription.unsubscribe();
    }
  
    if (this.battleResultSubscription) {
      this.battleResultSubscription.unsubscribe();
    }
  }

  getBackgroundColor(battleResult: string) {
    switch (battleResult) {
      case 'Ganhou':
        return 'success';
      case 'Perdeu':
        return 'danger';
      case 'Empate':
        return 'warning';
      default:
        return '';
    }
  }

  adicionarNovoPokemon() {
    const index = this.pokemonCapturadoService.adicionarNovoPokemonCapturado();
    this.battleService.setPokemon1Index(index);
  }
}
