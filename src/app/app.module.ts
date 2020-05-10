import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
import {
  MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import {MainModule} from './main/main.module';
import { HeaderComponent } from './header/header.component';
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { AutocompleteHttpFilterComponent } from './autocomplete-http-filter/autocomplete-http-filter.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material';
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
    MatInputModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FileUploadComponent,
    AutocompleteHttpFilterComponent,
  ],
  exports : [MatButtonModule],
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
