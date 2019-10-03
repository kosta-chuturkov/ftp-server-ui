import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, merge, Observable, of, of as observableOf} from 'rxjs';
import {catchError, finalize, map, share, startWith, switchMap} from 'rxjs/operators';
import {FileManagementService} from "../_services/fileManagementService";
import {FileResponse} from "../_models/fileResponse";
import {FilesDataSource} from "../_services/files.datasource";
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  columnNamesInternal: string[] = ['name', 'createdBy.nickName', 'createdDate', 'fileSize', 'downloadHash', 'deleteHash', 'fileType'];
  columnsDisplayname: string[] = ['Name', 'Created By', 'Uploaded', 'Size', 'Download', 'Delete', 'Type'];
  private filesSubject = new BehaviorSubject<FileResponse[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);
  private dataSource: FilesDataSource;
  constructor(protected fileManagementService: FileManagementService) {
    this.dataSource = new FilesDataSource(fileManagementService, this.paginator, this.sort);
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getColor(file_type: string) {
    switch (file_type) {
      case 'Private': return '#000000';
      case 'Public': return '#00b359';
      case 'Shared': return '#0073e6';
    }
    return '#800044';
  }

  handlePageChange(event) {
    this.dataSource.loadFiles("dummy-req-id","Bearer 123", event.pageIndex, event.pageSize)
  }
}

