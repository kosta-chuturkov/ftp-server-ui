import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {FindAllFilesPageResponse} from "../_models/findAllFilesPageResponse";
import * as uuid from 'uuid';

@Injectable()
export class FileManagementService {

  private backendUrl = environment.backendURL;
  public defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getAllFiles(fileType: BehaviorSubject<string>, page: number, size: number): Observable<FindAllFilesPageResponse> {
    let queryParameters = this.getPageHeaders(page, size);
    queryParameters = queryParameters.set('type', <any>fileType.getValue());
    let headers = this.getDefaultHeaders(uuid.v4(), "Bearer fdsfrsfss");

    return this.httpClient.get<any>(`${this.backendUrl}/api/v1/files/files`,
      {
        params: queryParameters,
        headers: headers,
      }
    );
  }

  public search(fileType: BehaviorSubject<string>, query: string, page: number, size: number): Observable<FindAllFilesPageResponse> {

    let queryParameters = this.getPageHeaders(page, size);
    queryParameters = queryParameters.set('type', <any>fileType.getValue());
    if (query !== undefined) {
      queryParameters = queryParameters.set('q', <any>query);
    }
    let headers = this.getDefaultHeaders(uuid.v4(), "Bearer fdsfrsfss");

    return this.httpClient.get<any>(`${this.backendUrl}/api/v1/files/files/search`,
      {
        params: queryParameters,
        headers: headers,
      }
    );
  }

  private getPageHeaders(page: number, size: number) {
    let queryParameters = new HttpParams();
    if (page !== undefined) {
      queryParameters = queryParameters.set('page', <any>page);
    }
    if (size !== undefined) {
      queryParameters = queryParameters.set('size', <any>size);
    }
    return queryParameters;
  }

  private getDefaultHeaders(requestId: string, authorization: string) {
    let headers = this.defaultHeaders;
    headers = headers.set('RequestId', String(requestId));
    headers = headers.set('Authorization', String(authorization));
    headers = headers.set('Access-Control-Allow-Origin', 'http://localhost:8081/');
    return headers;
  }
}
