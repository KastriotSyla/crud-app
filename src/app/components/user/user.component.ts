import {Component, OnInit} from '@angular/core';

import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {ApiService} from 'src/app/_services/api.service';
import {Router} from '@angular/router';
import {AuthenticationService} from 'src/app/_services';
import {User, Role} from 'src/app/_models/index';


@Component({
   selector: 'app-book',
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   currentUser: User;
   users: any;
   displayedColumns = ['isbn', 'title', 'author'];
   dataSource = new UserDataSource(this.api);
   
   constructor(private api: ApiService, private router: Router,
               private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }
   
   ngOnInit() {
      this.api.getUsers()
         .subscribe(res => {
            console.log(res);
            this.users = res;
         }, err => {
            console.log(err);
         });
   }
   
   get isAdmin() {
      return this.currentUser && this.currentUser.role === Role.Admin;
   }
}

export class UserDataSource extends DataSource<any> {
   constructor(private api: ApiService) {
      super()
   }
   
   connect() {
      return this.api.getUsers();
   }
   
   disconnect() {
   
   }
}
