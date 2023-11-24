
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { LoginComponent } from './components/login/login.component';

import { BrindeCreateComponent } from './components/brinde/brinde-create/brinde-create.component';
import { BrindeReadComponent } from './components/brinde/brinde-read/brinde-read.component';

import { PedidoComponent } from './components/pedido/pedido.component';

import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'brinde/create', component: BrindeCreateComponent },
  { path: 'brinde/read', component: BrindeReadComponent },

  { path: 'sobre', component: SobreComponent },
  { path: 'login', component:LoginComponent},

  { path: 'cliente/create', component: ClienteCreateComponent },
  { path: 'cliente/read', component: ClienteReadComponent},


  { path: 'pedido', component: PedidoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
