import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {FindAllFilesPageResponse} from "../_models/findAllFilesPageResponse";
import {BaseHttpService} from "./baseHttpService";

@Injectable()
export class FileManagementService extends BaseHttpService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  public getAllFiles(fileType: BehaviorSubject<string>, page: number, size: number): Observable<FindAllFilesPageResponse> {
    let queryParameters = this.getPageHeaders(page, size);
    let headers = this.getDefaultHeaders("Bearer fdsfrsfss");

    let url = `${this.backendUrl}/api/v1/files/` + fileType.getValue().toLocaleLowerCase();
    return this.httpClient.get<any>(url,
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
    let headers = this.getDefaultHeaders("Bearer fdsfrsfss");

    return this.httpClient.get<any>(`${this.backendUrl}/api/v1/files/files/search`,
      {
        params: queryParameters,
        headers: headers,
      }
    );
  }

}
