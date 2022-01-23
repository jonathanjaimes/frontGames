import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IIngresar } from '../interfaces/iingresar.interface';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login-ingresar',
  templateUrl: './login-ingresar.component.html',
  styleUrls: ['./login-ingresar.component.scss']
})
export class LoginIngresarComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private servicioIngresar:LoginServiceService, private router:Router) { }

  ingresarForm = this.formBuilder.group({
    email: [""],
    clave: [""],

  })

  datosLoginIngresar:any = {}
  datosLoginIngresarJSON:IIngresar | string ={"email": "", "clave": ""}

  entrar(){
    console.log(this.ingresarForm.value)
    this.datosLoginIngresar = this.ingresarForm.value;
    console.log(this.datosLoginIngresar)
    this.datosLoginIngresarJSON = JSON.stringify(this.datosLoginIngresar)
    console.log(this.datosLoginIngresarJSON)

    this.servicioIngresar.ingresarDatos(this.datosLoginIngresarJSON).subscribe({
      next: (data:any) => {
        console.log(data)
        console.log(data.token)
        localStorage.setItem("token", data.token)
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
