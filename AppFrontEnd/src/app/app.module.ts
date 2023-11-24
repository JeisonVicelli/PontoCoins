import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal';
import { BrindesService } from './service/brindes.service';
import { HomeComponent } from './components/home/home.component'
import { RouterModule } from '@angular/router';
import { SobreComponent } from './components/sobre/sobre.component';

import { ClienteService } from './service/cliente.service';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';


import { BrindeCreateComponent } from './components/brinde/brinde-create/brinde-create.component';
import { BrindeReadComponent } from './components/brinde/brinde-read/brinde-read.component';
import { BrindeUpdateComponent } from './components/brinde/brinde-update/brinde-update.component';
import { BrindeDeleteComponent } from './components/brinde/brinde-delete/brinde-delete.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PedidoService } from './service/pedido.service';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    LoginComponent,


    PedidoComponent,

    BrindeCreateComponent,
    BrindeReadComponent,
    BrindeUpdateComponent,
    BrindeDeleteComponent,

    PedidoComponent,

     ClienteCreateComponent,
     ClienteReadComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,

  ],
  providers: [
    HttpClientModule,
    BrindesService,
    ClienteService,
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
