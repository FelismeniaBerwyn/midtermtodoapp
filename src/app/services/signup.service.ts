import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private _url: string = environment.url;

  constructor(private http: HttpClient) {}

  signupRequest(data) {
    return this.http.post(this._url + 'signup', data);
  }
}
