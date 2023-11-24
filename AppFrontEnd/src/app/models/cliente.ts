export class Cliente {
  cpf: string | null;
  nome: string | null;
  email: string | null;
  dataCadastro: Date | null;
  userName: string | null;
  passwordHash: string | null;
  numeroTelefone: string | null;
  pontos: number | null;
  valorTotalGasto: number | null;

  constructor() {
    this.cpf = null;
    this.nome = null;
    this.email = null;
    this.dataCadastro = null;
    this.userName = null;
    this.passwordHash = null;
    this.numeroTelefone = null;
    this.pontos = null;
    this.valorTotalGasto = null;
  }
}

