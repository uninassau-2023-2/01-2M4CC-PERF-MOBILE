import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  constructor(private httpCLient: HttpClient) {}
  getPokeAPIService(id: number = Math.floor(Math.random() * 100)) {
    return this.httpCLient.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
