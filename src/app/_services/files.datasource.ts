import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of, merge} from "rxjs";
import {catchError, finalize, map} from "rxjs/operators";
import {FileResponse} from "../_models/fileResponse";
import {FileManagementService} from "./fileManagementService";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {FindAllFilesPageResponse} from "../_models/findAllFilesPageResponse";

export class FilesDataSource extends DataSource<FileResponse> {

  private filesSubject = new BehaviorSubject<FileResponse[]>([]);

  set data(v: FileResponse[]) {
    this.filesSubject.next(v);
  }

  get data(): FileResponse[] {
    return this.filesSubject.value;
  }

  constructor(protected fileManagementService: FileManagementService,
              public paginator: MatPaginator,
              public sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
  }

  loadFiles(requestId: string, authorization: string, page?: number, size?: number) {
    this.fileManagementService
      .getAllFiles(requestId, authorization, page, size)
      .subscribe(files => {
        this.paginator.length = files.totalElements;
        this.paginator.pageSize = files.numberOfElements;
        this.paginator.pageIndex=files.number;
        this.data = files.content;
      });
  }

  connect(collectionViewer: CollectionViewer): Observable<FileResponse[]> {
    console.log("Connecting data source");
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      this.filesSubject,
      this.paginator.page,
      this.sort.sortChange
    ];
    this.loadFiles("dummy-req-id","Bearer 123", this.paginator.pageIndex, 10)
    // Set the paginators length

    return merge(...dataMutations).pipe(map(() => {
      return (this.getSortedData([...this.data]));
    }));
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.filesSubject.complete();
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: FileResponse[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      console.log(this.sort.active);
      switch (this.sort.active) {
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'createdBy.nickName':
          return this.compare(+a.createdBy.nickName, +b.createdBy.nickName, isAsc);
        case 'createdDate':
          return this.compare(+a.createdDate, +b.createdDate, isAsc);
        case 'fileSize':
          return this.compare(+a.fileSize, +b.fileSize, isAsc);
        case 'fileType':
          return this.compare(a.fileType, b.fileType, isAsc);
        default:
          return 0;
      }
    });
  }

  /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
