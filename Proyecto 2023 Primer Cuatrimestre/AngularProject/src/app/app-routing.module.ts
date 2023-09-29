import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MembresiaComponent } from './membresia/membresia.component';
import { PlanesComponent } from './planes/planes.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TiendaComponent } from './tienda/tienda.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'inicio', component: HomeComponent },
  {path: 'about', component: SobreNosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'planes', component: PlanesComponent},
  {path: 'membresia', component: MembresiaComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/* Se crea clase para exportar los modulos al app.ts*/
export const routingComponentes = [
  SobreNosotrosComponent, 
  ContactoComponent,
  MembresiaComponent,
  TiendaComponent,
  HomeComponent,
  PlanesComponent,
  RegisterComponent,
  PerfilComponent
]