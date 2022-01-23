import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing.module';
import { SliderComponent } from './slider/slider.component';
import { JuegosComponent } from './juegos/juegos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TiendaComponent } from './tienda/tienda.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginIngresarComponent } from './login-ingresar/login-ingresar.component';
import { FreeComponent } from './free/free.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    SliderComponent,
    JuegosComponent,
    TiendaComponent,
    LoginComponent,
    LoginIngresarComponent,
    FreeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
