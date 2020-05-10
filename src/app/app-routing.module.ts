import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register';
import {AuthGuard} from './_guards';
import {MainModule} from './main/main.module';
import {DatatableComponent} from './datatable/datatable.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule} from '@angular/material';
import {MainComponent} from './main/main.component';
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {AutocompleteHttpFilterComponent} from "./autocomplete-http-filter/autocomplete-http-filter.component";

const routes: Routes = [
   {path: '', redirectTo: 'login', pathMatch: 'full'}, // canActivate: [AuthGuard]
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainComponent },
  { path: 'upload', component: FileUploadComponent },
  { path: 'autocomplete', component: AutocompleteHttpFilterComponent },
  // otherwise redirect to home
   { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatButtonModule,
    MatCheckboxModule, MatFormFieldModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
