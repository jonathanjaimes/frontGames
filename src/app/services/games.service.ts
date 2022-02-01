import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { IGame } from '../interfaces/igame.interface';
import { IGameFree } from '../interfaces/igamefree.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http:HttpClient) { }

  apiUrl = "http://localhost:4000/offers"

  apiUrlFree = "http://localhost:4000/offers/freeToPlay"

  apiUrlOfertasAnteriores = "http://localhost:4000/offers/newgames"

  apiUrlEnviarLista = "http://localhost:4000/offers"

  apiUrlEnviarNuevos = "http://localhost:4000/alert?game="

  // games:IGame[] = []

  // freeToGame:any = []
  // epicGames:any = []

  // gamesFree:IGameFree[] = []

  // hayError:boolean = false;



  traerJuegos():any {
    const token = localStorage.getItem("token") || ''
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-token', token);
    return lastValueFrom(this.http.get<IGame>(this.apiUrl, {headers}))

    };

    traerJuegosFree():any {

      const token = localStorage.getItem("token") || ''
      const headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-token', token);
      return lastValueFrom(this.http.get<IGameFree>(this.apiUrlFree, { headers }));
    }

    
    enviarJuegosAnteriores(body:any):any {
      const headers = {'Content-Type': 'application/json'};
      return lastValueFrom(this.http.post(this.apiUrlEnviarLista, body, { headers }))
  
      };


      enviarNuevos(nombreJuego:string):any {
        const headers = {'Content-Type': 'application/json'};
        return lastValueFrom(this.http.get(`${this.apiUrlEnviarNuevos} ${nombreJuego}`, { headers }))
    
        };


    traerOfertasAnteriores():any {
      const token = localStorage.getItem("token") || ''
      const headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-token', token);
      return lastValueFrom(this.http.get(this.apiUrlOfertasAnteriores, { headers }))

    }



  }