import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {first, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {CookieService} from 'ngx-cookie-service';
import {BaseHttpService} from './baseHttpService';
import {EventEmitterService} from './event-emitter.service';

@Injectable()
export class LoginService extends BaseHttpService {
  private logoutSuffix = '/logout';
  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private eventEmitterService: EventEmitterService) {
    super(http);
  }

  login(email: string, password: string) {
    const headers = super.getDefaultHeaders('Bearer 123124');
    const httpParams = new HttpParams()
      .append('email', email)
      .append('password', password);
    console.log(httpParams);
    return this.http.post<any>(`${environment.backendURL}/api/v1/login`, {},
      {
        headers: headers,
        params: httpParams
      })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        this.eventEmitterService.userEmailEventEmitter.emit(email);
        localStorage.setItem('currentUserEmail', email);
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    this.eventEmitterService.userEmailEventEmitter.emit('');
    localStorage.removeItem('currentUserEmail');
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
