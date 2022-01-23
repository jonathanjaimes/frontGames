import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGame } from '../interfaces/igame.interface';
import { IGameFree } from '../interfaces/igamefree.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http:HttpClient) { }

  apiUrl = "http://localhost:4000/offers"

  apiUrlFree = "http://localhost:4000/offers/freeToPlay"

  games:IGame[] = []

  gamesFree:IGameFree[] = []

  hayError:boolean = false;
  free2:any[] = []


  traerJuegos():any {
    const token = localStorage.getItem("token") || ''
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-token', token);
    this.http.get<IGame>(this.apiUrl, {headers}).subscribe({
      next: (resp:any) => {
        this.games = resp;
        console.log(this.games)
        // console.log(this.hayError)
      },
      error: (err:any) => {
        this.hayError = true;
        console.log(this.hayError)
      }
    })

    };

    traerJuegosFree():any {

      const token = localStorage.getItem("token") || ''

      const headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-token', token);
      this.http.get<IGameFree>(this.apiUrlFree, { headers }).subscribe({
        next: (resp:any) => {
          this.gamesFree = resp;
          this.free2 = Object.entries(this.gamesFree)

          console.log(this.gamesFree)
          // console.log(this.hayError)
        },
        error: (err:any) => {
          this.hayError = true;
          console.log(this.hayError)
        }
      })
    }




  }