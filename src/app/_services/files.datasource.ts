import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of, merge} from "rxjs";
import {map} from "rxjs/operators";
import {FileResponse} from "../_models/fileResponse";
import {FileManagementService} from "./fileManagementService";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

export class FilesDataSource extends DataSource<FileResponse> {

  public filter: string;

  private filesSubject = new BehaviorSubject<FileResponse[]>([]);


  set data(v: FileResponse[]) {
    this.filesSubject.next(v);
  }

  get data(): FileResponse[] {
    return this.filesSubject.value;
  }

  constructor(protected fileManagementService: FileManagementService,
              public paginator: MatPaginator,
              public sort: MatSort,
              public fileTypeSubject: BehaviorSubject<string>) {
    super();
  }

  loadFiles(page: number, size: number) {
    this.fileManagementService
      .getAllFiles(this.fileTypeSubject, page, size)
      .subscribe(files => {
        this.paginator.length = files.totalElements;
        this.paginator.pageSize = files.numberOfElements;
        this.paginator.pageIndex = files.number;
        this.data = files.content;
      });
  }

  updateTableWithSearchData(query: string, page: number, size: number) {
    this.fileManagementService
      .search(this.fileTypeSubject, query, page, size)
      .subscribe(files => {
        this.paginator.length = files.totalElements;
        this.paginator.pageSize = files.numberOfElements;
        this.paginator.pageIndex = files.number;
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
    this.loadFiles(this.paginator.pageIndex, 10)
    // Set the paginators length

    return merge(...dataMutations).pipe(map(() => {
      return (this.getSortedData([...this.data]));
    }));
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.filesSubject.complete();
  }

  filterPredicate: ((data: FileResponse, filter: string) => boolean) = (data: FileResponse, filter: string): boolean => {
    // Transform the data into a lowercase string of all property values.
    const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
      // Use an obscure Unicode character to delimit the words in the concatenated string.
      // This avoids matches where the values of two columns combined will match the user's query
      // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
      // that has a very low chance of being typed in by somebody in a text field. This one in
      // particular is "White up-pointing triangle with dot" from
      // https://en.wikipedia.org/wiki/List_of_Unicode_characters
      return currentTerm + (data as { [key: string]: any })[key] + '◬';
    }, '').toLowerCase();

    // Transform the filter by converting it to lowercase and removing whitespace.
    const transformedFilter = filter.trim().toLowerCase();

    return dataStr.indexOf(transformedFilter) != -1;
  }

  _updatePaginator(filteredDataLength: number) {
    Promise.resolve().then(() => {
      const paginator = this.paginator;

      if (!paginator) {
        return;
      }

      paginator.length = filteredDataLength;

      // If the page index is set beyond the page, reduce it to the last page.
      if (paginator.pageIndex > 0) {
        const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
        const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);

        if (newPageIndex !== paginator.pageIndex) {
          paginator.pageIndex = newPageIndex;
        }
      }
    });
  }

  _filterData(data: FileResponse[]) {
    // If there is a filter string, filter out data that does not contain it.
    // Each data object is converted to a string using the function defined by filterTermAccessor.
    // May be overridden for customization.
    let filteredData = !this.filter ? data : data.filter(obj => this.filterPredicate(obj, this.filter));

    if (this.paginator) {
      this._updatePaginator(filteredData.length);
    }

    return filteredData;
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
