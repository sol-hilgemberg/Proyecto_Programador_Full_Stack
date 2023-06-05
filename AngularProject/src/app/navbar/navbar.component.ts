import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../services/autenticacion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private autenticacion: AutenticacionService, private router: Router) {}

  ngOnInit() {
    this.autenticacion.getLoggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn; // Actualiza el estado de inicio de sesión en el componente
    });
  }

  logout() {
    this.loggedIn = false;
    this.autenticacion.setLoggedIn(false);
    this.router.navigate(['/inicio']);
    this.autenticacion.logout();
    console.log(this.loggedIn);
  }
  
  

}
