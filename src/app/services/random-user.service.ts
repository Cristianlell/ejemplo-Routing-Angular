import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError, catchError, retry } from 'rxjs';
import { IRandomContact, Results} from '../models/randomUser';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log(`Ha ocurrido un error: ${error.error}`);
    } else {
      console.log(
        `Ha ocurrido un error en el servidor: ${error.status}, Error:${error.error}`
      );
    }

    return throwError(
      () => new Error('Error en la petición de contacto aleatorio')
    );
  }

  obtenerRandomContact(): Observable<Results> {
    return this.http.get<Results>('https://randomuser.me/api').pipe(
      retry(2), // reintentamos 2 veces la peticion
      catchError(this.handleError) // emitimos el error
    );
  }

  obtenerRandomContacts(n: number,sexo?:string): Observable<Results> {

    let params: HttpParams = new HttpParams().set('results', n);
    if (sexo) {
      params = params.append('gender',sexo);
    }

    console.log(params);
    
    
    return this.http.get<Results>('https://randomuser.me/api',{params} ).pipe(
      retry(2), // reintentamos 2 veces la peticion
      catchError(this.handleError) // emitimos el error
    );
  }
}
