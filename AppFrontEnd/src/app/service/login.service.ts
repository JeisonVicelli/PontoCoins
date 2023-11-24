import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(login: Login): Observable<boolean> {
    const url = 'http://localhost:5181/login';
    const body = JSON.stringify(login);

    return this.http.post(url, body).pipe(
      // Converte a resposta para um objeto `boolean`
      map((res: any) => res.success),
    );
  }

  isAuthenticated(): boolean {
    // O usuário está autenticado se o token de autenticação estiver presente
    return localStorage.getItem('token') !== null;
  }
}
