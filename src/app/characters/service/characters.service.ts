import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../interface/info';
import { Planets } from '../../planets/interface/planets';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  

  private urlDragonBall = "https://dragonball-api.com/api/characters/";

  constructor(private http: HttpClient) {}

  getInfo(): Observable<{ items: Info[] }> {
    return this.http.get<{ items: Info[] }>(this.urlDragonBall);
  }

  getOrigin(id:number):Observable<Planets>{
    return this.http.get<Planets>(`${this.urlDragonBall}${id}`)
  }
}
