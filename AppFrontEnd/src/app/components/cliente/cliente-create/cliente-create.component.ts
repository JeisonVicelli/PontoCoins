import { ClienteService } from '../../../service/cliente.service';
import { Cliente } from '../../../models/cliente';
import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {
  cliente: Cliente = new Cliente();
  formularioCliente: FormGroup;
  tituloFormulario: string = 'Novo Cliente';


  constructor(private clienteService: ClienteService, private router: Router) {
    // Inicialize o FormGroup com os controles e valores iniciais
    this.formularioCliente = new FormGroup({
      cpf: new FormControl(null),
      nome: new FormControl(null),
      email: new FormControl(null),
      numeroTelefone: new FormControl(null),
      dataCadastro: new FormControl(null),
      userName: new FormControl(null),
      passwordHash: new FormControl(null),
      pontos: new FormControl(null),
      valorTotalGasto: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Cliente';
  }

  redirecionarParaClienteRead() {
    this.router.navigate(['/cliente/read']);
  }

  enviarFormulario(): void {
    const cliente : Cliente = this.formularioCliente.value;
    this.clienteService.cadastrar(cliente).subscribe((result) => {
      alert('Cliente inserido com sucesso.');
      this.formularioCliente.reset();
    });
  }
}


