import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { cookieDg } from '../utils/utils';

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
    if (environment.local) {
      const headers = new HttpHeaders().set('Cookie', cookieDg);
      return this.http.post(url, {}, { headers });
    } else {
      return this.http.post(url, {});
    }
  }
}
