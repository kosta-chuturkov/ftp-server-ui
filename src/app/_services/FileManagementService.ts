import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class FileManagementService {
  constructor(private http: HttpClient) {

  }
}
