import { Component, OnInit } from '@angular/core';
import {FileManagementService} from "../_services/fileManagementService";
import {FindAllFilesPageResponse} from "../_models/findAllFilesPageResponse";
import {environment} from "../../environments/environment";
import {HttpHeaders, HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private backendUrl: string;
  private fileUploadUrl: string;
  listOfUsers = 'Enter Users Here';
  httpRequestParams: HttpParams;
  httpRequestHeaders: HttpHeaders;

  constructor(protected fileManagementService: FileManagementService) {
    this.backendUrl = environment.backendURL;
    this.fileUploadUrl = this.backendUrl + '/api/v1/files/upload';
    this.httpRequestParams = new HttpParams().set('userNickNames', '[stoyan]');
  }

  ngOnInit() {
  }

}
