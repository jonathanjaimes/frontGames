import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { IGame } from '../interfaces/igame.interface';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {

  pageSize = 6;
  page = 1;


  games:IGame[] = []

  gamesAnteriores:IGame[] = []

  nombresOfertasNuevo: any = ["casa"]
  nombresOfertasAnteriores: any = []
  noIncluido:string = "It Takes Two"

  constructor(private servicio:GamesService) { }
  
  ngOnInit(): void {
    
    this.getGamesOffers()
    

    
    
  }

  getGamesOffers() {
    this.servicio.traerJuegos().then((resp:any) => {
      this.games = resp
      this.nombresOfertasNuevo = this.games.map(g => g.name);
      console.log(this.nombresOfertasNuevo)

      this.getOfertasAnteriores();
      this.comparar();
      console.log(this.noIncluido)
      if (this.noIncluido != ""){
        this.postListaNoIncluidos();
        
      }
      this.postOfertasAnteriores();

      console.log(resp)
    }).catch((err:any) => {
      console.log(err)
    })
  }
  
  getOfertasAnteriores(){
    this.servicio.traerOfertasAnteriores().then((resp:any) => {
      this.nombresOfertasNuevo = resp;
      console.log(this.nombresOfertasNuevo)
    }).catch((err:any) => {
      console.log(err)
    })
  }

  postOfertasAnteriores(){
    this.servicio.enviarJuegosAnteriores(this.nombresOfertasNuevo).then((resp:any) => {
      console.log("Recibido correctamente")
    }).catch((err:any) => {
      console.log(err)
    })
  }



  array1:any = ["a", "b", "c"]
  array2:any = ["a", "b", "c", "d"]

  

  comparar(){
    for (let i = 0; i < this.nombresOfertasAnteriores.length; i++) {
      if( !this.nombresOfertasAnteriores.includes(this.nombresOfertasNuevo[i])){
        this.noIncluido = this.nombresOfertasNuevo[i]
      }

    }

    // for(let index in this.games){
    //   this.nombres.push(this.games[index].name)
    // }

    if(this.noIncluido.length != 0){
      console.log("Juego nuevo: " + this.noIncluido)

    }else {
      console.log("No hay nuevos juegos")
    }

  }

  postListaNoIncluidos(){
    this.servicio.enviarNuevos(this.noIncluido).then((resp:any) => {
      console.log("No incluidos recibidos")
    }).catch((err:any) => {
      console.log(err)
    })
  }
  


}
