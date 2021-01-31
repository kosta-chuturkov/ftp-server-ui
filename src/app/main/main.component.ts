import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material/tabs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  options: string;
  privateFilesLabel = 'Private files';
  sharedFilesLabel = 'Shared files';
  privateTabSelected = true;
  sharedTabSelected = false;

  constructor() {
  }

  ngOnInit() {
    this.options = '';
  }

  onOptionsChanged(data: string) {
    this.options = data;
  }

  handleChanged(data: MatTabChangeEvent) {
    this.privateTabSelected = !this.privateTabSelected;
    this.sharedTabSelected = !this.sharedTabSelected;
  }
}
