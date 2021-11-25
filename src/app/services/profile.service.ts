import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _url: string = environment.url;

  constructor(private http: HttpClient) {}

  updateProfileRequest(data) {
    return this.http.put(this._url + 'updateUser', data);
  }

  deactivateAcc(data) {
    return this.http.delete(this._url + 'deactivate', data);
  }
}
