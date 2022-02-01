import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { FreeGames, Current, GameListElement, IGameFree } from '../interfaces/igamefree.interface';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.scss']
})
export class FreeComponent implements OnInit {

  pageSize = 15;
  page = 1;

  constructor(private servicio:GamesService) { }

  freeToGame:GameListElement[] = []

  ngOnInit(): void {
    this.getFreeGames()
  }


  getFreeGames() {
    this.servicio.traerJuegosFree()
    .then((resp:any) => {
      this.freeToGame = resp[0].gameList
      console.log(this.freeToGame);
      })
    .catch((err:any) => {
        console.error(err);
      })
  }


}
