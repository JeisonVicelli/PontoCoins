import { PedidoService } from './../../service/pedido.service';
import { Cliente } from '../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { BrindesService } from 'src/app/service/brindes.service';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  tituloFormulario = 'Troca de Pontos por Brinde';
  formularioTroca!: FormGroup;
  listaBrindes: any[] = [];
  brindesSelecionados: any[]= [];
  valorTotal: number = 0;

  constructor(
    private fb: FormBuilder,
    private pedidoService:PedidoService,
    private brindeService: BrindesService,
    private clienteService: ClienteService

    ) { }

  ngOnInit() {
    this.inicializarFormulario();
    this.listarBrindes();
    this.brindesSelecionados = [];
  }

  inicializarFormulario() {
    this.formularioTroca = this.fb.group({
      cpf: ['', Validators.required],
      cliente: [{ value: '', disabled: true }, Validators.required],
      pontos: [{ value: '', disabled: true }],
      brinde: ['', Validators.required],
      total: [{ value: this.valorTotal.toFixed(2), disabled: true  }]
    });
    this.formularioTroca.get('cpf')!.valueChanges.subscribe(cpf => {

        // Se o CPF tiver 11 caracteres, buscar informações do cliente
        this.buscarInformacoesCliente(cpf);
      }
    );
  };

  private buscarInformacoesCliente(cpf: string) {
    // Chamar o serviço para buscar informações do cliente usando o CPF
    this.clienteService.buscar(cpf).subscribe(
      (cliente: Cliente) => {
        // Verificar se algum cliente foi retornado
        if (cliente) {
          // Atualizar os campos do formulário com as informações do cliente
          this.formularioTroca.get('cliente')!.setValue(cliente.nome || '');
          this.formularioTroca.get('pontos')!.setValue(cliente.pontos || 0);
        } else {
          console.log('Nenhum cliente encontrado com o CPF fornecido');
        }
      },
      (error) => {
        console.error('Erro ao buscar informações do cliente:', error);
      }
    );
  }
  realizarTroca() {
    // Obtenha os dados necessários do formulário
    const cpf = this.formularioTroca.get('cpf')!.value;
    const brindeSelecionado = this.formularioTroca.get('brinde')!.value;


    // Criar um objeto com os dados necessários para a troca
    const troca = {
      CpfCliente: cpf,
      IdBrinde: brindeSelecionado

    };
    alert(cpf);
    alert(brindeSelecionado);

    // Chamar o serviço para realizar a troca
    this.pedidoService.realizarTroca(troca).subscribe(
      (response) => {
        console.log('Troca realizada com sucesso');
        // Adicione aqui qualquer lógica adicional após a troca
      },
      (error) => {
        console.error('Erro ao realizar a troca');
        // Adicione aqui qualquer lógica adicional em caso de erro
      }
    );
  }


  enviarFormulario() {
    const cpf = this.formularioTroca.get('cpf')!.value;
    const cliente = this.formularioTroca.get('cliente')!.value;
    const brindeSelecionado = this.formularioTroca.get('brinde')!.value;

  // Criar um novo pedido
  const novoPedido = { cliente: { nome: cliente }, brindes: [brindeSelecionado] };

  // Criar um objeto com os dados necessários para a troca
  const troca = {
    CpfCliente: cpf,
    IdBrinde: brindeSelecionado
  };
  // Chamar o serviço para realizar a troca
  this.pedidoService.realizarTroca(troca).subscribe(
    (response) => {
      console.log('Troca realizada com sucesso:', response);
    },
    (error) => {
      console.error('Erro ao realizar a troca:', error);
    }
  );

  // Chamar o serviço para adicionar o pedido
  this.pedidoService.adicionarPedido(novoPedido).subscribe(
    (response) => {
      console.log('Pedido criado com sucesso:', response);
    },
    (error) => {
      console.error('Erro ao criar o pedido:', error);
    }
  );
}

listarBrindes() {
  this.brindeService.listar().subscribe(
    (brindes) => {
      this.listaBrindes = brindes;
    },
    (error) => {
      console.error('Erro ao buscar brindes:', error);
    }
  );
}

adicionarBrinde() {

  const brindeId = this.formularioTroca.get('brinde')!.value;
  const brindeSelecionado = this.listaBrindes.find((brinde) => brinde.id == brindeId);
  if (brindeSelecionado) {
    const brinde = {
      nome: brindeSelecionado.nome,
      valorPontos: brindeSelecionado.valorPontos
    };

      this.brindesSelecionados.push(brinde);

      this.valorTotal += brinde.valorPontos;
      this.formularioTroca.get('total')!.setValue(this.valorTotal.toFixed(0));

  }
}
}
