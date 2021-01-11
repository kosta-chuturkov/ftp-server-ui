import { Component, OnInit } from '@angular/core';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {FileManagementService} from '../_services/fileManagementService';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  private readonly backendUrl: string;
  private fileUploadUrl: string;
  listOfUsers = 'Enter Users Here';
  httpRequestParams: HttpParams;
  httpRequestHeaders: HttpHeaders;
  selectedCars = [3];
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', disabled: true },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  constructor(protected fileManagementService: FileManagementService) {
    this.backendUrl = environment.backendURL;
    this.fileUploadUrl = this.backendUrl + '/api/v1/files/upload';
    this.httpRequestParams = new HttpParams().set('userNickNames', '[stoyan]');
  }

  ngOnInit(): void {
  }

}
