import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../interfaces/ilogin.interface';
import { LoginServiceService } from '../services/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private servicio:LoginServiceService, private router:Router) { }

  registerForm = this.formBuilder.group({
    nombre: [""],
    usuario: [""],
    email: [""],
    clave: [""],

  })

  datosLogin:any = {}
  datosLoginJSON:ILogin | string ={"nombre": "", "usuario": "", "email": "", "clave": ""}

  registrar(){
    this.datosLogin = this.registerForm.value;
    this.datosLoginJSON = JSON.stringify(this.datosLogin)
    console.log(this.datosLoginJSON)

    this.servicio.enviarDatos(this.datosLoginJSON).subscribe({
      next: (data:any) => {
        this.router.navigate(["/"])

      },
      error: (error:any) => {
          console.error('There was an error!', error);
      }
    })

  }

  ngOnInit(): void {
  }

}
