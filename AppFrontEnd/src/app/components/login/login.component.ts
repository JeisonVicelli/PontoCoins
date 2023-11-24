import { Component } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/service/login.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: Login = new Login();
  loginError: string = '';

  constructor(private loginService: LoginService) {}

  onSubmit() {
    // Crie um objeto Login com os dados do formulário
    const loginData: Login = {
      username: this.login.username,
      password: this.login.password
    };

    // Chama o serviço de login para enviar os dados de login
    this.loginService.login(loginData)
      .subscribe({
        next: (response) => {
          // Lógica de tratamento da resposta do servidor em caso de sucesso
          console.log('Login bem-sucedido', response);
          this.loginError = ''; // Limpa qualquer erro anterior
        },
        error: (error) => {
          // Lógica de tratamento da resposta do servidor em caso de erro
          console.error('Erro ao fazer login', error);
          this.loginError = 'Credenciais inválidas. Por favor, tente novamente.';
        }
      } as Subscriber<boolean>);
  }
}
