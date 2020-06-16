import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// used to create fake backend
import {fakeBackendProvider} from './_helpers';

import {AppComponent} from './app.component';
import {appRoutingModule} from './app.routing';

import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {HomeComponent} from './home';
import {AdminComponent} from './admin';
import {LoginComponent} from './login';
import {MenagerComponent} from './menager';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {
   MatInputModule,
   MatPaginatorModule,
   MatProgressSpinnerModule,
   MatSortModule,
   MatTableModule,
   MatIconModule,
   MatButtonModule,
   MatCardModule,
   MatNativeDateModule, MatDatepickerModule,
   
   MatFormFieldModule
} from "@angular/material";
import {UserComponent} from './components/user/user.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UserCreateComponent} from './components/user-create/user-create.component';

@NgModule({
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      appRoutingModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatProgressSpinnerModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule
   ],
   declarations: [
      AppComponent,
      HomeComponent,
      AdminComponent,
      LoginComponent,
      MenagerComponent,
      UserComponent,
      UserEditComponent,
      UserDetailComponent,
      UserCreateComponent,
      UserComponent,
   ],
   providers: [
      {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
      {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
      
      // provider used to create fake backend
      fakeBackendProvider
   ],
   bootstrap: [AppComponent]
})

export class AppModule {
}
