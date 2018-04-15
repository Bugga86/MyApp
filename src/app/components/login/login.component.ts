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
    if(this.username === "Administrator" && this.password === "Administrator")
    {
      // localStorage.setItem("username",form.value.username);
      sessionStorage.setItem("username",form.value.username);
    } else{
      alert('Invalid User');
    }
}
}