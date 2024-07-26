import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  getDatiUtenteFromCookie() {
    const url =
      environment.services.auth.root +
      environment.services.auth.authUser.root +
      environment.services.auth.authUser.userDataDaCookie;
    return this.http.post(url, {});
  }
}
