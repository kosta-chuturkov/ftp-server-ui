import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from '../_models';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  getByEmail(email: string) {
    return this.http.get(`${environment.backendURL}/users/` + email);
  }

  register(user: User) {
    return this.http.post(`${environment.backendURL}/users/register`, user);
  }

}

