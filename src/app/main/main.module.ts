import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {DatatableComponent} from '../datatable/datatable.component';
import {FileSizePipe} from '../_services/file-size.pipe';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgOptionHighlightModule} from '@ng-select/ng-option-highlight';
import {FormsModule} from '@angular/forms';
import {FileManagementService} from '../_services/fileManagementService';

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
    MatListModule,
    MatProgressBarModule,
    NgSelectModule,
    NgOptionHighlightModule,
    FormsModule
  ], providers: [
    FileManagementService
]
})
export class MainModule { }
