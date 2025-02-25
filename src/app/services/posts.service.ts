import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='; // URL base

  constructor(private http: HttpClient) {}

  buscarCocteles(nombre: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${nombre}`);
  }
  obtenerBebidasPorCategoria(categoria: string): Observable<any> {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`;
    return this.http.get(url);
  }
}


