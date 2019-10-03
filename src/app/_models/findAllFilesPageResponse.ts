import {Link} from './link';
import {Sort} from './sort';
import {FileResponse} from "./fileResponse";

export interface FindAllFilesPageResponse {
  content?: FileResponse[];
  first?: boolean;
  last?: boolean;
  links?: Link[];
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
