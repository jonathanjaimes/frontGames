import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.scss']
})
export class FreeComponent implements OnInit {

  pageSize = 15;
  page = 4;

  constructor(private servicio:GamesService) { this.iterar()}

  ngOnInit(): void {
    
    this.servicio.traerJuegosFree()
    console.log(typeof(this.listadoFree))
    
  }

  get listadoFree() {
    return this.servicio.free2
  }

  iterar(){
    for (let value of this.listadoFree)
      console.log(value[0].appid)

  }



}
