import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { LoginComponent } from './login/login.component';
import { LoginIngresarComponent } from './login-ingresar/login-ingresar.component';

const routes: Routes = [
  {
    path: '',
    component: PortadaComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'loginIngresar',
    component: LoginIngresarComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
