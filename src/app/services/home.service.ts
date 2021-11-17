import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _url: string = environment.url;

  constructor(private http: HttpClient) {}

  getTodoRequest() {
    return this.http.get(this._url + 'gettodo');
  }
}
