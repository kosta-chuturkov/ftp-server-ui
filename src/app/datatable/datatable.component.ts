import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FilesDataSource} from '../_services/files.datasource';
import {BehaviorSubject} from 'rxjs';
import {FileManagementService} from '../_services/fileManagementService';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-datatable',
  inputs: ['fileType'],
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  columnNamesInternal: string[] = ['name', 'createdBy.nickName', 'createdDate', 'fileSize', 'downloadHash', 'deleteHash'];
  columnsDisplayname: string[] = ['Name', 'Created By', 'Uploaded', 'Size', 'Download', 'Delete'];
  private dataSource: FilesDataSource;
  private fileTypeSubject = new BehaviorSubject<string>(null);

  set fileType(v: string) {
    this.fileTypeSubject.next(v);
  }

  get fileType(): string {
    return this.fileTypeSubject.value;
  }

  constructor(public fileManagementService: FileManagementService, public dialog: MatDialog) {
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

  deleteFile(element: any) {
    const url = '/api/v1/files/' + element.deleteHash + '/delete';
    const currentData = this.dataSource.data;
    this.fileManagementService.deleteFile(url)
      .subscribe(
        data => {
        const index: number = currentData.findIndex(d => d === element);
        currentData.splice(index, 1);
        this.dataSource.data = currentData;
      },
      error => {
        this.openDialog(error);
      });
  }

  getDownloadLink(element: any) {
    return '/api/v1/files/' + element.downloadHash + '/download/' + element.name;
  }

  openDialog(errorMsg) {
    this.dialog.open(DialogComponent, {
      data: {message: errorMsg}
    });
  }
}


