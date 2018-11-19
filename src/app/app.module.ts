import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import {fakeBackendProvider} from './_helpers/fake-backend';
import {
  MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import {MainModule} from './main/main.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
  ],
  exports : [MatButtonModule],
  providers: [
    AuthGuard,
    AlertService,
    LoginService,
    UserService,
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
