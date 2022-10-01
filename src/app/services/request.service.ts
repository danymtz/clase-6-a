import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  getCharacters(){
    return this.httpClient.get('https://rickandmortyapi.com/api/character');
  }

  getCharacter(name: string){
    return this.httpClient.get('https://rickandmortyapi.com/api/character/?name='+name)
  }
}
