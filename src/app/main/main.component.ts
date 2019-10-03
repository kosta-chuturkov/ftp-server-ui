import { Component, OnInit } from '@angular/core';
import {FileManagementService} from "../_services/fileManagementService";
import {FindAllFilesPageResponse} from "../_models/findAllFilesPageResponse";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(protected fileManagementService: FileManagementService) { }

  ngOnInit() {
  }

}
