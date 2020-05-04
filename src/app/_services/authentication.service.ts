import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {first, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {CookieService} from 'ngx-cookie-service';
import {BaseHttpService} from "./baseHttpService";

@Injectable()
export class LoginService extends BaseHttpService {
  private logoutSuffix = '/logout';

  constructor(private http: HttpClient, private cookieService: CookieService) {
    super(http);
  }

  login(email: string, password: string) {
    let headers = super.getDefaultHeaders('Bearer 123124')
    let httpParams = new HttpParams()
      .append("email", email)
      .append("password", password);
    console.log(httpParams)
    return this.http.post<any>(`${environment.backendURL}/api/v1/login`, {},
      {
        headers: headers,
        params: httpParams
      })
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
    this.http.get(`${environment.backendURL}/api/v1/logout`)
     .pipe(first())
      .subscribe(
        data => {
          console.log('Logout successfully');

        },
        error => {
          console.log('error while logout', error);
        });
    this.cookieService.deleteAll();
  }
}
