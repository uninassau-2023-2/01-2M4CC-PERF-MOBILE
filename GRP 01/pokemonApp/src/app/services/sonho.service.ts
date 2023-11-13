import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SonhoService {

  constructor() { 
  }
  
  public numeroDeDeus = 0;
  
  public setAbilities(abilities: number) {
    this.numeroDeDeus = abilities;
  }

  public getDEUS(){
    return this.numeroDeDeus;
  }
}
