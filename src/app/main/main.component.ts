import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  options: string;

  constructor() {
  }

  ngOnInit() {
    this.options = '';
  }

  onOptionsChanged(data: string) {
    console.log('called:', data);
    this.options = data;
  }
}
