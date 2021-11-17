import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _url: string = environment.url;

  constructor(private http: HttpClient) {}

  loginRequest(data) {
    return this.http.post(this._url + 'login', data);
  }
}
