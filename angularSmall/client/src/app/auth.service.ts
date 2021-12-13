import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  regUser(user: any) {
    let headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:4747/account/newUser', user, {
      headers: headers
    }).pipe(map(
      (response: any) => response.json()
    ));
  }
}
