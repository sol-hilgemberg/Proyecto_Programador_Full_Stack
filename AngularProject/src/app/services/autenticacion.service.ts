import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  //private apiUrl = 'http://localhost:3000/users'; // API JSON SERVER de mis usuarios
  private apiUrl = 'http://localhost:8000/api';
  private loggedIn = false;
  private loggedInSubject = new BehaviorSubject<boolean>(false); // Variable de estado 

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    const data = { usuario: username, contraseña: password };
    return this.http.post<any>(`${this.apiUrl}/login`, data)
      .pipe(
        map(response => {
          if (response.message === 'Inicio de sesion con exito.') {
            // Las credenciales son validas, inicia sesión
            localStorage.setItem('currentUser', JSON.stringify(response.user));
            this.setLoggedIn(true);
            return true;
          } else {
            // Las credenciales son invalidas
            return false;
          }
        })
      );
  }
  
  /* 
  login con json server
  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any>(`${this.apiUrl}?username=${username}&password=${password}`) // Se realiza la llamada a la api y verifica las credenciales
      .pipe(
        map(users => {
          if (users.length > 0) {
            // Las credenciales son validas, inicia sesion
            localStorage.setItem('currentUser', JSON.stringify(users[0])); // Guarda en el almacenamiento local al usuario actual y sus credenciales
            return true;
          } else {
            // Las credenciales son inválidas
            return false; 
          }
        })
      );
  }
  */

  logout(): void {
    localStorage.removeItem('currentUser');
    this.setLoggedIn(false); // Establece loggedIn en false al cerrar sesión
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }
  setLoggedIn(value: boolean) {
    this.loggedInSubject.next(value); // Actualiza el estado de inicio de sesión
  }

  getLoggedIn() {
    return this.loggedInSubject.asObservable(); // Retorna el Observable del estado de inicio de sesión
  }
}
