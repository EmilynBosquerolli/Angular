import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItasService {

    apiEndpoint: string = "https://api.chucknorris.io";

  constructor(private http:HttpClient) { }

  getJoke(): Observable<any>{
    return this.http.get(this.apiEndpoint + '/jokes/random');
  }

  getCategories(): Observable<any>{
    return this.http.get(this.apiEndpoint + '/jokes/categories');
  }

  
  getJokeByCategory(category): Observable<any>{
    return this.http.get(this.apiEndpoint + '/jokes/random?category=' + category);
  }

  selectCategory(){
    console.log(this.selectCategory);
  }
}
