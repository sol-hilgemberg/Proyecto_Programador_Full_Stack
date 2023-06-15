import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutenticacionService } from '../services/autenticacion.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  loginError: boolean;
  formLogin = this.formBuilder.group({
    'username': ['', Validators.required],
    'password': ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(
    private http: HttpClient,
    private autenticacion: AutenticacionService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.username = '';
    this.password = '';
    this.loginError = false;
  }

  login() {
    this.autenticacion.login(this.username, this.password).subscribe(
      (result) => {
        if (result) {
          // Inicio de sesión exitoso, redireccionar al componente <app-navbar></app-navbar>
          console.log('Sesión iniciada');
          console.log('Credenciales ingresadas:');
          console.log('Username:', this.username);
          console.log('Password:', this.password);
          this.autenticacion.setLoggedIn(true);
          this.router.navigate(['/navbar']).then(() =>
            this.router.navigateByUrl('/inicio')
          );
        } else {
          this.autenticacion.setLoggedIn(false);
          this.loginError = true;
          console.log('Error en las credenciales de usuario');
          console.log('Username:', this.username);
          console.log('Password:', this.password);
        }
      },
      (error) => {
        this.loginError = true;
        this.autenticacion.setLoggedIn(false);
        console.log('Error en las credenciales de usuario');
        console.log('Username:', this.username);
        console.log('Password:', this.password);
      }
    );
  }

  onSubmit() {
    if (this.formLogin.valid) {
      this.username = this.formLogin.value.username ?? ''; // Ya que la asignacion puede ser string, null o undefined para solucionar esto agrego el operador coalescente nulo ??
      this.password = this.formLogin.value.password ?? ''; // el cual proporciona un valor predeterminado en caso de que el valor sea null o undefined. De esta manera
      this.login();                                        // evitamos el error de asignacion de tipos y asignamos un valor.
    }
  }
}

