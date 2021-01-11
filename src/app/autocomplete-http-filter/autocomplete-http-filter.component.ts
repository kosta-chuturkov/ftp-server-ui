import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BaseHttpService} from '../_services/baseHttpService';
import {UserNicknameEntry} from '../_models/UserNicknameEntry';
import {SelectAutocompleteComponent} from '../select-autocomplete/select-autocomplete.component';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'app-autocomplete-http-filter',
  templateUrl: './autocomplete-http-filter.component.html',
  styleUrls: ['./autocomplete-http-filter.component.css']
})
export class AutocompleteHttpFilterComponent extends BaseHttpService implements OnInit {
  filteredOptions: any[];
  selectedControl = new FormControl();
  @ViewChild(SelectAutocompleteComponent)
  multiSelect: SelectAutocompleteComponent;
  profileForm: FormGroup = new FormGroup({
    selected: this.selectedControl
  });

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) {
    super(http);
  }

  ngOnInit() {
    this._filter();
  }

  onToggleDropdown() {
    this.multiSelect.toggleDropdown();
  }

  onSubmit() {
    console.log('submited');
    // console.log(this.selectedControl.value);
  }

  private _filter(): any[] {
    const headers = super.getDefaultHeaders('Bearer 123124');
    const url = `${environment.backendURL}/api/v1/users`;
    const localOptions = [];
    this.http.get<[]>(url, {
      headers: headers,
    })
      .pipe(first())
      .subscribe(
        data => {
          let counter = 1;
          for (const entry of data) {
            const nickNameEntry: UserNicknameEntry = new UserNicknameEntry();
            nickNameEntry.display = entry['display'];
            nickNameEntry.value = entry['value'];
            localOptions.push(nickNameEntry);
            counter++;
          }
          console.log('localOptions', localOptions);
        },
        error => {
          console.log('error while fetching users', error);
        }
      );
    this.filteredOptions = localOptions;
    return localOptions;
  }
}
