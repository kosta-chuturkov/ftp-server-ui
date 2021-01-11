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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileManagementService} from '../_services/fileManagementService';
import {FileUploadComponent} from '../file-upload/file-upload.component';
import {AutocompleteComponent} from '../autocomplete/autocomplete.component';
import {AutocompleteHttpFilterComponent} from '../autocomplete-http-filter/autocomplete-http-filter.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {SelectAutocompleteComponent} from '../select-autocomplete/select-autocomplete.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [MainComponent, DatatableComponent, FileSizePipe, FileUploadComponent,
    AutocompleteComponent, SelectAutocompleteComponent, AutocompleteHttpFilterComponent],
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
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
  ], providers: [
    FileManagementService
]
})
export class MainModule { }
