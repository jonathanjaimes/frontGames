import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private servicio:GamesService) { }

  
  buscarPalabra = this.formBuilder.group({
    buscar: [""]
  })
  
  terminoBusqueda:string = ""
  
  get listado() { //Mediante el get podemos acceder a la variable games que está en el servicio
    //tener en cuenta que el subscribe está en el mismo servicio
    return this.servicio.games
  }
  

  // games:IGame[] = this.servicio.
  


  // filterItems(query:any) {
  //   return this.fruits.filter(function(el:any) {
  //       return el.indexOf(query) > - 1;
  //   })
  // }

  buscar(){

    // let fruits = [this.listado[0].name, this.listado[1].name, this.listado[2].name, this.listado[3].name, this.listado[4].name];

    

    // // console.log(typeof(this.buscarPalabra.value))
    // // console.log(this.listado[0].name)

    // this.terminoBusqueda = this.buscarPalabra.value.buscar

    // console.log(this.terminoBusqueda)

    
    // const filterItems = (query:any) => {
    //   return fruits.filter((el:string) =>
    //   el.toLowerCase().indexOf(query.toLowerCase()) > -1
    //   );
    // }
    // console.log(filterItems(this.terminoBusqueda))



    //###########################

    // let fruits = [this.listado[0].name, this.listado[1].name, this.listado[2].name, this.listado[3].name, this.listado[4].name];

    let nuevoArray = Object.entries(this.listado)

    // console.log(typeof(this.buscarPalabra.value))
    // console.log(this.listado[0].name)

    // this.terminoBusqueda = this.buscarPalabra.value.buscar

    // console.log(this.terminoBusqueda)

    
    // const filterItems = (query:any) => {
    //   return nuevoArray.filter((el:string) =>
    //   el.toLowerCase().indexOf(query.toLowerCase()) > -1
    //   );
    // }
    // console.log(filterItems(this.terminoBusqueda))
    
  }


  ngOnInit(): void {
  }

}
