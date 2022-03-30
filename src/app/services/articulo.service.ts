import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  articulo: Articulo = new Articulo();
  url: string = "https://jsonplaceholder.typicode.com";

  constructor(public http: HttpClient) { }

  leerNoticias() : Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${this.url}${'/posts'}`)
  }

  obtenerUsuario(userId: number) : Observable<User> {
    return this.http.get<User>(`${this.url}${'/users/'}${userId}`)
  }

  guardarArticulo(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(`${this.url}${'/posts'}`, articulo)
  }

  allUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}${'/users'}`)
  }

  getUsersWithError() {
    return this.http.get(`${this.url}${"/users"}${"withError"}`);
   }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}${'/posts/'}${id}`)
  }

  
  updateAtricle(article: Articulo): Observable<Articulo> {
    return this.http.put<Articulo>(`${this.url}${'/posts/'}${article.id}`, article)
  }


}
