import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from "../../environments/environment";
import * as uuid from 'uuid';

export class BaseHttpService {

  protected backendUrl = environment.backendURL;
  public defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  protected getPageHeaders(page: number, size: number) {
    let queryParameters = new HttpParams();
    if (page !== undefined) {
      queryParameters = queryParameters.set('page', <any>page);
    }
    if (size !== undefined) {
      queryParameters = queryParameters.set('size', <any>size);
    }
    return queryParameters;
  }

  protected getCSRF() {
    let name = "CSRF-TOKEN=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
  }

  protected getDefaultHeaders(authorization: string) {
    let headers = this.defaultHeaders;
    let requestId = uuid.v4();
    headers = headers.set('RequestId', String(requestId));
    headers = headers.set('X-CSRF-TOKEN', this.getCSRF());
    headers = headers.set('Authorization', String(authorization));
    headers = headers.set('Access-Control-Allow-Origin', 'http://localhost:8081/');
    return headers;
  }
}
