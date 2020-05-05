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
import {FileManagementService} from "../_services/fileManagementService";
import {FileUploadComponent} from "../file-upload/file-upload.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
@NgModule({
  declarations: [MainComponent, DatatableComponent,FileUploadComponent, FileSizePipe],
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
    MatListModule,
    MatProgressBarModule,
  ], providers: [
    FileManagementService
]
})
export class MainModule { }
