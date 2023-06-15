import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder) {

  }

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

  onSubmit() {
    console.log(this.formRegister.value)
  }

}
