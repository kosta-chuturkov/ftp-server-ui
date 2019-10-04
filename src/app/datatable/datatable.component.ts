import {MatPaginator, MatSort} from '@angular/material';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FileManagementService} from "../_services/fileManagementService";
import {FilesDataSource} from "../_services/files.datasource";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  columnNamesInternal: string[] = ['name', 'createdBy.nickName', 'createdDate', 'fileSize', 'downloadHash', 'deleteHash', 'fileType'];
  columnsDisplayname: string[] = ['Name', 'Created By', 'Uploaded', 'Size', 'Download', 'Delete', 'Type'];
  private dataSource: FilesDataSource;

  constructor(protected fileManagementService: FileManagementService) {
    this.dataSource = new FilesDataSource(fileManagementService, this.paginator, this.sort);
  }

  applyFilter(filterValue: string) {
    console.log("called")
    if (filterValue == "") {
      this.dataSource.loadFiles("dummy-req-id", "Bearer 123", 0, 10)
    } else if (filterValue.length > 1) {
      let filter = encodeURIComponent(filterValue.trim().toLowerCase());
      this.dataSource.updateTableWithSearchData("dummy-req-id", "Bearer 123", filter, 0, 10)
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
    this.dataSource.loadFiles("dummy-req-id", "Bearer 123", event.pageIndex, event.pageSize)
  }
}

