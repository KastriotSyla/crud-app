import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from 'src/app/_services/api.service';
import {AuthenticationService} from 'src/app/_services';
import {User, Role} from 'src/app/_models/index';

@Component({
   selector: 'app-book-detail',
   templateUrl: './user-detail.component.html',
   styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
   user = {};
   currentUser: User;
   
   constructor(
      private route: ActivatedRoute,
      private api: ApiService,
      private router: Router,
      private authenticationService: AuthenticationService
   ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }
   
   ngOnInit() {
      this.getBookDetails(this.route.snapshot.params['id']);
   }
   
   get isAdmin() {
      return this.currentUser && this.currentUser.role === Role.Admin;
   }
   
   get isMenager() {
      return this.currentUser && this.currentUser.role === Role.Menager;
   }
   
   getBookDetails(id) {
      this.api.getUser(id)
         .subscribe(data => {
            console.log(data);
            this.user = data;
         });
   }
   
   deleteBook(id) {
      this.api.deleteUser(id)
         .subscribe(res => {
               this.router.navigate(['/users']);
            }, (err) => {
               console.log(err);
            }
         );
   }
   
}
