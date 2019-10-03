import {FileCreator} from "./fileCreator";

export interface FileResponse {
  id?: number;
  createdBy?: FileCreator;
  name?: string;
  downloadHash?: string;
  deleteHash?: string;
  fileSize?: number;
  createdDate?: number;
  updatedDate?: number;
  fileType?: string;
}
