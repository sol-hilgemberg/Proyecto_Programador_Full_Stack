import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutenticacionService } from '../services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  loginError: boolean;

  constructor(private http: HttpClient, private autenticacion: AutenticacionService, private router: Router) {
    this.username = '';
    this.password = '';
    this.loginError = false;
   }

   login() {
    this.autenticacion.login(this.username, this.password)
      .subscribe(result => {
        if (result) {
          // Inicio de sesión exitoso, redireccionar al componente <app-navbar></app-navbar>
          console.log('Credenciales ingresadas:');
          console.log('Username:', this.username);
          console.log('Password:', this.password);
          this.autenticacion.setLoggedIn(true);
          this.router.navigate(['/navbar'])
            .then(() => this.router.navigateByUrl('/inicio'));
        } else {
          this.autenticacion.setLoggedIn(false);
          this.loginError = true;
          console.log("Error en las credenciales de usuario");
        }
      }, error => {
        this.loginError = true;
        this.autenticacion.setLoggedIn(false);
        console.log("Error en las credenciales de usuario");
      });
  }
  
}
