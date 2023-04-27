import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokemons() : Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  }

  getPokemon(id: string) : Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+id);
  }
}
