import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'hammerjs';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatPaginatorModule, MatSortModule, MatListModule, MatIconModule, MatSidenavModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainComponent} from './main.component';
import {DatatableComponent} from '../datatable/datatable.component';
import {FileSizePipe} from '../_services/file-size.pipe';
@NgModule({
  declarations: [MainComponent, DatatableComponent, FileSizePipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ]
})
export class MainModule { }
