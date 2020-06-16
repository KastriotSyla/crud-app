import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../_models';
import {UserService} from '../_services';

@Component({templateUrl: 'admin.component.html'})
export class AdminComponent implements OnInit {
   loading = false;
   users: User[] = [];
   data: any;
   
   constructor(private userService: UserService) {
   }
   
   ngOnInit() {
      this.loading = true;
      this.userService.getAll().pipe(first()).subscribe(users => {
         this.loading = false;
         this.users = users;
      });
      
      this.userService.getUsers().pipe(first()).subscribe(data => {
         console.log('test');
         this.data = data;
         console.log(data)
      });
   }
}
