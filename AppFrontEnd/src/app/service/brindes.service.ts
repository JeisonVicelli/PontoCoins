  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { Brinde } from '../models/Brinde';

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  @Injectable({
    providedIn: 'root',
  })
  export class BrindesService {
    apiUrl = 'http://localhost:5181/Brinde';
    constructor(private http: HttpClient) {}

    cadastrar(brinde: Brinde): Observable<any> {
      const url = `${this.apiUrl}/cadastrar`;
      return this.http.post<Brinde>(url, brinde, httpOptions);
    }
    listar(): Observable<Brinde[]> {
      const url = `${this.apiUrl}/listar`;
      return this.http.get<Brinde[]>(url);
    }
    alterar(brinde: Brinde): Observable<any> {
      const url = `${this.apiUrl}/alterar`;
      return this.http.put<Brinde>(url, brinde, httpOptions);
    }
    excluir(brinde: Brinde): Observable<any> {
      const url = `${this.apiUrl}/excluir/{id}`;
      return this.http.delete<Brinde>(url, httpOptions);
    }
    atualizar(brinde: Brinde): Observable<Brinde> {
      const url = `${this.apiUrl}/atualizar/${brinde.id}`; // Supondo que sua API use um ID para identificar o brinde a ser atualizado
      return this.http.put<Brinde>(url, brinde, httpOptions);
    }
  }

  
