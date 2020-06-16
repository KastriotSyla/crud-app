import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ApiService} from 'src/app/_services/api.service';

@Component({
   selector: 'app-book-create',
   templateUrl: './user-create.component.html',
   styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
   
   userForm: FormGroup;
   id: number;
   firstName: string = '';
   LastName: string = '';
   
   constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
   }
   
   ngOnInit() {
      this.userForm = this.formBuilder.group({
         'id': [null, Validators.required],
         'firstName': [null, Validators.required],
         'LastName': [null, Validators.required],
      });
   }
   
   onFormSubmit(form: NgForm) {
      this.api.postUser(form)
         .subscribe(res => {
            let id = res['id'];
            this.router.navigate(['/user-details', id]);
         }, (err) => {
            console.log(err);
         });
   }
}
