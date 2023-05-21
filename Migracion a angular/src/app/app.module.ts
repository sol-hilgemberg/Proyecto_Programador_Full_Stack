import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MembresiaComponent } from './membresia/membresia.component';
import { PlanesComponent } from './planes/planes.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CardsShopComponent } from './tienda/cards-shop/cards-shop.component';
import { CarritoComprasComponent } from './tienda/carrito-compras/carrito-compras.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    MembresiaComponent,
    PlanesComponent,
    SobreNosotrosComponent,
    NavbarComponent,
    HomeComponent,
    TiendaComponent,
    CardsShopComponent,
    CarritoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
