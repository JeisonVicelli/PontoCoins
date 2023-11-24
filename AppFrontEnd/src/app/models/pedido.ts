import { Cliente } from "./cliente";
import { Brinde } from "./Brinde";


export class Pedido {
  id: number = 0;
  cliente: Cliente = new Cliente();
  valorTotalPontos: number = 0;
  brindes: Brinde[];

  constructor() {
    this.brindes = [];
    this.atualizarValorTotalPontos(); // Chama a função para calcular os pontos ao criar o pedido
  }

  adicionarBrinde(brinde: Brinde) {
    this.brindes.push(brinde);
    this.atualizarValorTotalPontos(); // Recalcula os pontos sempre que um brinde é adicionado
  }

  private atualizarValorTotalPontos() {
    this.valorTotalPontos = this.calcularPontos();
  }

  private calcularPontos(): number {
    let pontos = 0;

    if (this.brindes && this.brindes.length > 0) {
      this.brindes.forEach(brinde => {
        pontos += brinde.valorPontos;
      });
    }

    return pontos;
  }
}
