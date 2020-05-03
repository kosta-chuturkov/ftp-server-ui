import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from '../_models';
import {BaseHttpService} from "./baseHttpService";

@Injectable()
export class UserService extends BaseHttpService{
  constructor(private http: HttpClient) {
    super(http);
  }

  getByEmail(email: string) {
    return this.http.get(`${environment.backendURL}/users/` + email);
  }

  register(user: User) {
    let headers = super.getDefaultHeaders('Bearer 123124')
    return this.http.post<any>(`${environment.backendURL}/api/v1/register`,user,
      {
        headers: headers
      });
  }

}

