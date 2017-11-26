import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formSignUp: FormGroup;
  constructor() { }

  onSubmit() {
    console.log(this.formSignUp.value);
  }

  ngOnInit() {
    this.formSignUp = new FormGroup({
      email: new FormControl,
      password: new FormControl,
      subject: new FormGroup({
        nodejs: new FormControl(),
        reactjs: new FormControl(),
        angular: new FormControl(),
      })
    })
  }

}
