import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiEndpoint: string = "https://api.pokemontcg.io/v1";

  constructor(private http: HttpClient) { }

  getCard(): Observable<any>{
    return this.http.get(this.apiEndpoint + '/cards');
  }
}
