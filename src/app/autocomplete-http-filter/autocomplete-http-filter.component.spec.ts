import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteHttpFilterComponent } from './autocomplete-http-filter.component';

describe('AutocompleteHttpFilterComponent', () => {
  let component: AutocompleteHttpFilterComponent;
  let fixture: ComponentFixture<AutocompleteHttpFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteHttpFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteHttpFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
