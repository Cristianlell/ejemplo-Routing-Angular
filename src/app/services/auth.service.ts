import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  // Método Login
  login(email: string, password: string): Observable<any>{
    let body:Object ={
      email,
      password
    }
    return this.http.post('https://reqres.in/api/login',body);
  }
  
}
