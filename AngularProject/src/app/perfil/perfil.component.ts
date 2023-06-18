import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AutenticacionService } from '../services/autenticacion.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent{
  avatarImage: string; // Variable para almacenar la foto del avatar
  selectedImage!: File;
  usuario: any; // Variable para almacenar los datos del usuario
  @ViewChild('usuario') usuarioElementRef!: ElementRef; // elemento h4 al agregar el operador "!" le estamos diciendo a TypeScript
  formPerfil = this.formBuilder.group({                 //  que confie en que esta propiedad sera inicializada luego en otra parte del codigo
    nombre: ['', Validators.required],
    'apellido': ['', Validators.required],
    'birthdate': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(5)]]
    //'presentacion': []
  });

  constructor(
    private autenticacion: AutenticacionService,
    private formBuilder: FormBuilder
  ) {
    this.avatarImage = '../../assets/images/avatar.jpg'
  }

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
  }

  uploadImage(): void {
    if (this.selectedImage) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.avatarImage = event.target.result;
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }

  ngOnInit(): void {
    this.autenticacion.getCurrentUser().subscribe(
      user => {
        if (user) {
          this.usuario = user;
          // Actualiza el texto del elemento h4 utilizando la referencia
          this.usuarioElementRef.nativeElement.innerText = this.usuario.usuario;
          this.formPerfil.patchValue({
            nombre: this.usuario.nombre,
            apellido: this.usuario.apellido,
            birthdate: this.usuario.fechaNacimiento,
            email: this.usuario.email,
            password: ''
          });
        } else {
          this.formPerfil.patchValue({
            nombre: "",
            apellido: "",
            birthdate: "",
            email: "",
            password: ''
          });
        }
      }
    );
  }

  actualizarPerfil() {
    // Obtiene los valores actualizados del formulario
    const valoresFormulario = this.formPerfil.value;
  
    // Crea un objeto vacio para almacenar los campos actualizados
    const camposActualizados: any = {};
  
    // Verifica que campos del formulario cambiaron y los agrega al objeto de campos actualizados
    if (valoresFormulario.nombre !== this.usuario.nombre) {
      camposActualizados.nombre = valoresFormulario.nombre;
    }
    if (valoresFormulario.apellido !== this.usuario.apellido) {
      camposActualizados.apellido = valoresFormulario.apellido;
    }
    if (valoresFormulario.birthdate !== this.usuario.fechaNacimiento) {
      camposActualizados.birthdate = valoresFormulario.birthdate;
    }
    if (valoresFormulario.email !== this.usuario.email) {
      camposActualizados.email = valoresFormulario.email;
    }
    if (valoresFormulario.password !== '') {
      camposActualizados.password = valoresFormulario.password;
    }
    this.autenticacion.actualizarUsuario(this.usuario.usuario, camposActualizados).subscribe(
      respuesta => {
        console.log("Perfil actualizado")
      },
      error => {
        console.error('Error al actualizar el perfil:', error);
      }
    );

  }
  
  
  
  
}