import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Brinde } from 'src/app/models/Brinde';
import { BrindesService } from 'src/app/service/brindes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-brinde-update',
  templateUrl: './brinde-update.component.html',
  styleUrls: ['./brinde-update.component.css']
})
export class BrindeUpdateComponent implements OnInit{
  formularioBrinde: FormGroup;
  tituloFormulario: string = '';

  constructor(private brindeService: BrindesService, private router: Router) {
    // Inicialize a propriedade com uma nova instância da classe FormGroup.
    this.formularioBrinde = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(''),
      valorPontos: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.tituloFormulario = 'Editar Brinde';
  }

  redirecionarParaBrindeRead() {
    this.router.navigate(['/brinde/read']);
  }

  enviarFormulario(): void {
    const brinde: Brinde = this.formularioBrinde.value;
    this.brindeService.alterar(brinde).subscribe((result) => {
      alert('Brinde alterado com sucesso.');
      this.formularioBrinde.reset();
    });
  }
}


