import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  onSubmit(formSignIn) {
    console.log(formSignIn);
  }

  constructor() { }

  ngOnInit() {
  }

}
