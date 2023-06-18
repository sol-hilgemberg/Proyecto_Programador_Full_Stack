import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

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
    const data = {
      usuario: username,
      contraseña: password 
    };
    return this.http.post<any>(`${this.apiUrl}/login`, data)
      .pipe(
        map(response => {
          if (response.message === 'Inicio de sesion con exito.') {
            // Las credenciales son validas, inicia sesión
            //localStorage.setItem('currentUser', JSON.stringify(response.user));
            localStorage.setItem('currentUser', JSON.stringify(data.usuario));
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

  register(username: string, password: string, nombre: string, apellido: string, fechaNacimiento: string, email: string): Observable<boolean> {
    const data = {
      usuario: username,
      contraseña: password,
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento,
      email: email
    };
  
    return this.http.post<any>(`${this.apiUrl}/register`, data).pipe(
      map(response => {
        if (response.message === 'Usuario registrado correctamente.') {
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          return true;
        } else {
          return false;
        }
      })
    );
  }

  getCurrentUser(): Observable<any> {
    const currentUser = localStorage.getItem('currentUser');
    console.log("prueba", currentUser)
    if (currentUser) {
      try {
        const user = JSON.parse(currentUser);
        return this.http.get<any>(`${this.apiUrl}/users/${user}`).pipe(
          map(response => {
            return response;
          }),
          catchError(error => {
            console.error('Error al obtener los datos del usuario:', error);
            return of(null);
          })
        );
      } catch (error) {
        console.error('Error al analizar el JSON de currentUser:', error);
        return of(null);
      }
    } else {
      return of(null);
    }
  }

  actualizarUsuario(usuario: string, campoActualizado: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/users/${usuario}/update/`, campoActualizado).pipe(
      map(response => {
        if (response.status === 200) {
          return true; // Si la solicitud fue exitosa, devolvemos true
        } else {
          return false; // Si la solicitud no fue exitosa, devolvemos false
        }
      }),
      catchError(error => {
        console.error('Error al actualizar los datos del usuario:', error);
        return of(false); 
      })
    );
  }
  
  
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
