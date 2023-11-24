import { ClienteService } from 'src/app/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit{
  clientes: Cliente[] = [];

  constructor(private clientesService: ClienteService) {}

  ngOnInit() {
    this.listarClientes();
  }


  listarClientes() {
    this.clientesService.listar().subscribe(
      (clientes) => {
        this.clientes = clientes;
      },
      (error) => {
        console.error('Erro ao buscar brindes:', error);
      }
    );
  }

  alterar(id: number) {
    // Implemente a lógica para editar um brinde
  }

  deletar(id: number) {
    // Implemente a lógica para deletar um brinde
  }
}
