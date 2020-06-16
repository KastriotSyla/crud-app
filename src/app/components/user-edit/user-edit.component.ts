import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ApiService} from 'src/app/_services/api.service';

@Component({
   selector: 'app-book-edit',
   templateUrl: './user-edit.component.html',
   styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
   userForm: FormGroup;
   id: number;
   firstName: string = '';
   LastName: string = '';
   
   constructor(
      private router: Router,
      private route: ActivatedRoute,
      private api: ApiService,
      private formBuilder: FormBuilder
   ) {
   }
   
   ngOnInit() {
      this.getBook(this.route.snapshot.params['id']);
      this.userForm = this.formBuilder.group({
         'id': [null, Validators.required],
         'firstName': [null, Validators.required],
         'LastName': [null, Validators.required],
      });
   }
   
   getBook(id) {
      this.api.getUser(id).subscribe(data => {
         this.id = data.id;
         this.userForm.setValue({
            id: data.id,
            firstName: data.firstName,
            LastName: data.LastName,
            
         });
      });
   }
   
   onFormSubmit(form: NgForm) {
      this.api.updateUser(this.id, form)
         .subscribe(res => {
               let id = res['id'];
               this.router.navigate(['/book-details', id]);
            }, (err) => {
               console.log(err);
            }
         );
   }
   
   bookDetails() {
      this.router.navigate(['/book-details', this.id]);
   }
}
