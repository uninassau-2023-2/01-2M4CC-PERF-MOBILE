import { Component, OnInit } from '@angular/core';
import { PhotoService } from './../services/photo.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  randomPokemon: any;
  result: string = '';
  resultClass: string = '';
  tab1Abilities: any;

  constructor(
    public photoService: PhotoService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadRandomPokemonData();

    this.route.params.subscribe((params) => {
      this.tab1Abilities = +params['abilities'];
    });
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  loadRandomPokemonData() {
    const randomPokemonID = Math.floor(Math.random() * 100) + 1;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemonID}/`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.randomPokemon = {
        name: data.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomPokemonID}.svg`,
        abilities: data.abilities.length, // Use o comprimento do array de habilidades
        height: data.height,
        weight: data.weight,
      };

      // Após obter os dados do Pokémon aleatório, atualize o resultado com base nas habilidades.
      this.updateResult();
    });
  }

  updateResult() {
    if (this.randomPokemon.abilities === this.tab1Abilities) {
      this.result = 'Empate';
      this.resultClass = 'yellow-text';
    } else if (this.randomPokemon.abilities > this.tab1Abilities) {
      this.result = 'Ganhou';
      this.resultClass = 'red-text';
    } else {
      this.result = 'Perdeu';
      this.resultClass = 'green-text';
    }
  }
}
