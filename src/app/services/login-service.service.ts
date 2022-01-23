import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../interfaces/ilogin.interface';
import { IIngresar } from '../interfaces/iingresar.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  apiUrl = "http://localhost:4000/user"

  apiUrlEntrar = "http://localhost:4000/user/login"

  enviarDatos(body:any):any {
    const headers = {'Content-Type': 'application/json'};
    return this.http.post<ILogin>(this.apiUrl, body, { headers })

    };

    ingresarDatos(body:any):any {
      const headers = {'Content-Type': 'application/json'};
      return this.http.post<IIngresar>(this.apiUrlEntrar, body, { headers })
  
      };

}
