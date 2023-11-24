import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Brinde } from '../../../models/Brinde';
import { BrindesService } from '../../../service/brindes.service';
import { Router } from '@angular/router';  // Importe o Router do @angular/router

@Component({
  selector: 'app-brinde-create',
  templateUrl: './brinde-create.component.html',
  styleUrls: ['./brinde-create.component.css']
})
export class BrindeCreateComponent implements OnInit {

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
    this.tituloFormulario = 'Novo Brinde';
  }

  redirecionarParaBrindeRead() {
    this.router.navigate(['/brinde/read']);
  }

  enviarFormulario(): void {
    const brinde: Brinde = this.formularioBrinde.value;
    this.brindeService.cadastrar(brinde).subscribe((result) => {
      alert('Brinde inserido com sucesso.');
      this.formularioBrinde.reset();
    });
  }
}
