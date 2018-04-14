import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullname: ["", {
        validators: Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(26)]),
        updateOn: 'submit'
      }],
      email: ["", {
        validators: Validators.compose([Validators.required, Validators.email]),
        updateOn: 'submit'
      }],
      username: ["", {
        validators: Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(26)]),
        updateOn: 'submit'
      }],
      password: ["", {
        validators: Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(26)]),
        updateon: 'submit'
      }]

    });
  }
  registerUser() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
    //console.log(this.form.controls.username.errors);

  }



}
