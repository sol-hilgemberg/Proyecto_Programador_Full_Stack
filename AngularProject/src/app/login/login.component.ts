import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder) {

  }

  get username(){
    return this.formLogin.get('username') as FormControl;
  }

  get password(){
    return this.formLogin.get('password') as FormControl;
  }

    /* Validacion de Inputs */
  formLogin = this.formBuilder.group({
    'username': ['', Validators.required],
    'password': ['', [Validators.required, Validators.minLength(5)]]
  });

  onSubmit() {
    console.log(this.formLogin.value)
  }
}
