import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../_models';
import {UserService, AuthenticationService} from '../_services';

@Component({templateUrl: 'menager.component.html'})
export class MenagerComponent implements OnInit {
   loading = false;
   currentUser: User;
   userFromApi: User;
   
   constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService
   ) {
      this.currentUser = this.authenticationService.currentUserValue;
   }
   
   ngOnInit() {
      this.loading = true;
      this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
         this.loading = false;
         this.userFromApi = user;
         console.log(this.userFromApi);
      });
   }
}
