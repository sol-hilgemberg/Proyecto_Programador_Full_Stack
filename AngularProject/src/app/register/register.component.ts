import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AutenticacionService } from '../services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private autenticacion: AutenticacionService,
    private router: Router
  ) {}

  get usuario(){
    return this.formRegister.get('usuario') as FormControl;
  }

  get password(){
    return this.formRegister.get('password') as FormControl;
  }

  get nombre(){
    return this.formRegister.get('nombre') as FormControl;
  }

  get apellido(){
    return this.formRegister.get('apellido') as FormControl;
  }

  get birthdate(){
    return this.formRegister.get('birthdate') as FormControl;
  }
  
  get email(){
    return this.formRegister.get('email') as FormControl;
  }
  
  get celular(){
    return this.formRegister.get('celular') as FormControl;
  }

    /* Validacion de Inputs */
  formRegister = this.formBuilder.group({
    'usuario': ['', Validators.required],
    'password': ['', [Validators.required, Validators.minLength(5)]],
    'nombre': ['', Validators.required],
    'apellido': ['', Validators.required],
    'birthdate': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'celular': ['', [Validators.required, Validators.minLength(11)]]
  });

  register() {
    const username = this.formRegister.value.usuario ?? '';
    console.log(username);
    const password = this.formRegister.value.password ?? '';
    console.log(password);
    const nombre = this.formRegister.value.nombre ?? '';
    console.log(nombre);
    const apellido = this.formRegister.value.apellido ?? '';
    console.log(apellido);
    const fechaNacimiento = this.formRegister.value.birthdate ?? '';
    console.log(fechaNacimiento);
    const email = this.formRegister.value.email ?? '';
    console.log(email);
  
    this.autenticacion.register(username, password, nombre, apellido, fechaNacimiento, email).subscribe(
      (result) => {
        if (result) {
          console.log('Usuario registrado con éxito');
          this.router.navigate(['/navbar']).then(() =>
            this.router.navigateByUrl('/inicio')
          );
        } else {
          console.log('Error al registrar el usuario');
        }
      },
      (error) => {
        console.log('Error al registrar el usuario');
      }
    );
  }

  onSubmit() {
    console.log(this.formRegister.value);
    if (this.formRegister.valid) {
      this.register();
    }
  }
}
