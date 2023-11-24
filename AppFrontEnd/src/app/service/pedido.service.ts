import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private baseUrl = 'http://localhost:5181/pedido'; // Substitua pelo URL do seu backend

  constructor(private http: HttpClient) { }

  adicionarPedido(novoPedido: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/adicionarPedido`, novoPedido);
  }

  adicionarBrinde(brinde: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/pedido/adicionarBrinde`, brinde);
  }

  buscarPedidoPorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pedido/buscarPorId/${id}`);
  }

  cancelarPedido(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/pedido/cancelarPedido/${id}`);
  }

  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/pedido/getPedidos`);
  }
  buscarInformacoesCliente(cpf: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/cliente/buscarPorCPF/${cpf}`);
  }
  realizarTroca(troca: any): Observable<any> {
    const url = `http://localhost:5181/controlePonto/realizarTroca`;
    return this.http.post(url, troca);
  }
}

