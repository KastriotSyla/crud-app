import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {AdminComponent} from './admin';
import {LoginComponent} from './login';
import {AuthGuard} from './_helpers';
import {Role} from './_models';
import {MenagerComponent} from './menager';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UserCreateComponent} from './components/user-create/user-create.component';
import {UserComponent} from './components/user/user.component';


const routes: Routes = [
   {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard]
   },
   {
      path: 'menager',
      component: MenagerComponent,
      canActivate: [AuthGuard],
      data: {roles: [Role.Menager]}
   },
   {
      path: 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard],
      data: {roles: [Role.Admin]}
   },
   {
      path: 'users',
      component: UserComponent,
      canActivate: [AuthGuard],
   },
   {
      path: 'user-details/:id',
      component: UserDetailComponent,
      canActivate: [AuthGuard],
   },
   {
      path: 'user-create',
      component: UserCreateComponent,
      canActivate: [AuthGuard],
      data: {roles: [Role.Admin]}
   },
   {
      path: 'user-edit/:id',
      component: UserEditComponent,
      canActivate: [AuthGuard],
      data: {roles: [Role.Admin, Role.Menager]},
   },
   {
      path: 'login',
      component: LoginComponent
   },
   
   // otherwise redirect to home
   {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
