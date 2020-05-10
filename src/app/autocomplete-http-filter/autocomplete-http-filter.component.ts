import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {first, map, startWith} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BaseHttpService} from "../_services/baseHttpService";

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'app-autocomplete-http-filter',
  templateUrl: './autocomplete-http-filter.component.html',
  styleUrls: ['./autocomplete-http-filter.component.css']
})
export class AutocompleteHttpFilterComponent extends BaseHttpService implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  inputForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) {
    super(http)
  }

  ngOnInit() {
    this.inputForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
    });
    this.filteredOptions = this.myControl.valueChanges
      .pipe(map(value => this._filter(value)));
  }

  private _filter(value: string): string[] {
    let headers = super.getDefaultHeaders('Bearer 123124')
    let url = `${environment.backendURL}/api/v1/users/search?q=` + value;
    let localOptions = [];
    if (value.length > 2) {
      this.http.get(url, {
        headers: headers,
      })
        .pipe(first())
        .subscribe(
          data => {
            for (let entry of data["content"]) {
              localOptions.push(entry.nickName)
            }
          },
          error => {
            console.log('error while fetching users', error);
          }
        );
    }
    return localOptions;
  }
}
