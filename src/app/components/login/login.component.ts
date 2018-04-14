import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username:string;
  private password:string;

  constructor() { }

  ngOnInit() {
  }

  loginUser(form){
    if(form.valid){
      console.log(form.value);
    } else{
      window.alert('Invalid data');
    }
  }

}
