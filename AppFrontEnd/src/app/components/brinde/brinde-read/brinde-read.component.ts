import { Component, OnInit } from '@angular/core';
import { Brinde } from 'src/app/models/Brinde';
import { BrindesService } from 'src/app/service/brindes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brinde-read',
  templateUrl: './brinde-read.component.html',
  styleUrls: ['./brinde-read.component.css']
})
export class BrindeReadComponent implements OnInit{
  brindes: Brinde[] = [];

  constructor(private brindesService: BrindesService) { }

  ngOnInit() {
    this.listarBrindes();
  }

  listarBrindes() {
    this.brindesService.listar().subscribe(
      (brindes) => {
        this.brindes = brindes;
      },
      (error) => {
        console.error('Erro ao buscar brindes:', error);
      }
    );
  }

  alterar(id: number) {
    // Encontre o brinde pelo ID
    const brindeSelecionado = this.brindes.find(brinde => brinde.id === id);

    if (brindeSelecionado) {
      // Implemente a lógica para editar um brinde
      // Pode chamar o método alterar do BrindesService
      this.brindesService.alterar(brindeSelecionado).subscribe(
        (response) => {
          console.log('Brinde alterado com sucesso!', response);
        },
        (error) => {
          console.error('Erro ao alterar brinde:', error);
        }
      );
    }
  }
  /*redirecionarParaBrindeUpDate() {
    this.router.navigate(['/brinde/upDate']);
  }*/

  deletar(id: number) {
    // Implemente a lógica para deletar um brinde
    // Pode chamar o método excluir do BrindesService
    this.brindesService.excluir({ id } as Brinde).subscribe(
      (response) => {
        console.log('Brinde deletado com sucesso!', response);
        // Atualize a lista de brindes após a exclusão
        this.listarBrindes();
      },
      (error) => {
        console.error('Erro ao deletar brinde:', error);
      }
    );
  }
}
