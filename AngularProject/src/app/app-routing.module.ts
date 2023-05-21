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


const routes: Routes = [
  
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'inicio', component: HomeComponent },
  {path: 'about', component: SobreNosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'planes', component: PlanesComponent},
  {path: 'membresia', component: MembresiaComponent},
  {path: 'navbar', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
