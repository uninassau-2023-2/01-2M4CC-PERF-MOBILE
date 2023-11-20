import { Component } from '@angular/core';
import { PokeAPIService } from './../services/poke-api.service';
import { ViaCEPService } from './../services/via-cep.service';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
	areaBuscarPokemon: string = '52011210';
	areaBusca: any = {
		bairro: ' ',
		localidade: '',
		logradouro: ' ',
		uf: ''
	};
	pokemonvalue: any = {
		name: '',
		image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
		abilities: '',
		height: '',
		weight: ''
	};
	
	constructor(
		private pokeAPIService: PokeAPIService,
		private viaCEPService: ViaCEPService,
		private router: Router
	) { }
	buscarPokemon() {
		this.viaCEPService.getViaCEPService(this.areaBuscarPokemon)
			.subscribe((value) => {
				this.areaBusca.logradouro = JSON.parse(JSON.stringify(value))['logradouro'];
				this.areaBusca.bairro = ', ' + JSON.parse(JSON.stringify(value))["bairro"];
				this.areaBusca.localidade = ' - ' + JSON.parse(JSON.stringify(value))['localidade'];
				this.areaBusca.uf = '-' + JSON.parse(JSON.stringify(value))['uf'];


			});
			
			

		const randomPokemonID = Math.floor(Math.random() * 100) + 1;
		const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomPokemonID}.svg`;
		this.pokeAPIService.getPokeAPIService(randomPokemonID).subscribe((value) => {
			const pokemonData = JSON.parse(JSON.stringify(value));
			this.pokemonvalue.name = pokemonData.name;
			this.pokemonvalue.image = imageUrl;
			this.pokemonvalue.abilities = pokemonData.abilities.length; // Converte o array em uma string
			this.pokemonvalue.height = JSON.stringify(pokemonData.height);
			this.pokemonvalue.weight = JSON.stringify(pokemonData.weight);

			this.router.navigate(['/tabs/tab2', { abilities: this.pokemonvalue.abilities }]);
		});
	}
}
