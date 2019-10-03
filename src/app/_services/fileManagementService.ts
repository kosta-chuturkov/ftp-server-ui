import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {FindAllFilesPageResponse} from "../_models/findAllFilesPageResponse";


@Injectable()
export class FileManagementService {

  private backendUrl = environment.backendURL;
  public defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getAllFiles(requestId: string, authorization: string, page?: number, size?: number): Observable<FindAllFilesPageResponse> {
    if (requestId === null || requestId === undefined) {
      throw new Error('Required parameter requestId was null or undefined when calling findBots.');
    }

    let queryParameters = new HttpParams();
    if (page !== undefined) {
      queryParameters = queryParameters.set('page', <any>page);
    }
    if (size !== undefined) {
      queryParameters = queryParameters.set('size', <any>size);
    }

    let headers = this.defaultHeaders;
    headers = headers.set('RequestId', String(requestId));
    headers = headers.set('Authorization', String(authorization));

    return this.httpClient.get<any>(`${this.backendUrl}/api/v1/files/files`,
      {
        params: queryParameters,
        headers: headers,
      }
    );
  }
}
