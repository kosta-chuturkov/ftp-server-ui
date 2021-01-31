import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FilesDataSource} from '../_services/files.datasource';
import {BehaviorSubject} from 'rxjs';
import {FileManagementService} from '../_services/fileManagementService';

@Component({
  selector: 'app-datatable',
  inputs: ['fileType'],
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  columnNamesInternal: string[] = ['name', 'createdBy.nickName', 'createdDate', 'fileSize', 'downloadHash', 'deleteHash', 'fileType'];
  columnsDisplayname: string[] = ['Name', 'Created By', 'Uploaded', 'Size', 'Download', 'Delete', 'Type'];
  private dataSource: FilesDataSource;
  private fileTypeSubject = new BehaviorSubject<string>(null);

  set fileType(v: string) {
    this.fileTypeSubject.next(v);
  }

  get fileType(): string {
    return this.fileTypeSubject.value;
  }

  constructor(public fileManagementService: FileManagementService) {
    this.dataSource = new FilesDataSource(fileManagementService, this.paginator, this.sort, this.fileTypeSubject);
  }

  applyFilter(filterValue: string) {
    if (filterValue === '') {
      this.dataSource.loadFiles(0, 10);
    } else if (filterValue.length > 1) {
      const filter = encodeURIComponent(filterValue.trim().toLowerCase());
      this.dataSource.updateTableWithSearchData(filter, 0, 10);
    }
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getColor(file_type: string) {
    switch (file_type) {
      case 'Private':
        return '#000000';
      case 'Public':
        return '#00b359';
      case 'Shared':
        return '#0073e6';
    }
    return '#800044';
  }

  handlePageChange(event) {
    this.dataSource.loadFiles(event.pageIndex, event.pageSize);
  }

  deleteFile() {
    console.log('deleting file');
  }

  downloadFile() {
    console.log('downloading file');
  }
}

