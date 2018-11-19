import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class LoginService {
  private logoutSuffix = '/logout';
    constructor(private http: HttpClient, private cookieService: CookieService) { }

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.backendURL}/api/v1/login`, { email: email, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.cookieService.deleteAll();
        window.location.href = this.logoutSuffix;
    }
}
