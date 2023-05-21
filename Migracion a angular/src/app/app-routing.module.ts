import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MembresiaComponent } from './membresia/membresia.component';
import { PlanesComponent } from './planes/planes.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: SobreNosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'planes', component: PlanesComponent},
  {path: 'membresia', component: MembresiaComponent},
  {path: 'tienda', component: TiendaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
