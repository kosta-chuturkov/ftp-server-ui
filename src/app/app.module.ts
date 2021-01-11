import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule} from '@angular/common/http';

// used to create fake backend
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AlertComponent } from './alert';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, LoginService, UserService } from './_services';
import { RegisterComponent } from './register';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {CookieService} from 'ngx-cookie-service';

import {MainModule} from './main/main.module';
import { HeaderComponent } from './header/header.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AutocompleteHttpFilterComponent } from './autocomplete-http-filter/autocomplete-http-filter.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgOptionHighlightModule} from '@ng-select/ng-option-highlight';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
    AppRoutingModule,
    MainModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    NgSelectModule,
    NgOptionHighlightModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    AutocompleteHttpFilterComponent,
    AutocompleteComponent,
  ],
  exports: [MatButtonModule],
  providers: [
    AuthGuard,
    AlertService,
    LoginService,
    UserService,
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
