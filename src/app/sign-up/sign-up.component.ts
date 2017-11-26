import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [FormBuilder]
})
export class SignUpComponent implements OnInit {

  formSignUp: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
    console.log(this.formSignUp.value);
  }

  ngOnInit() {
    this.formSignUp = this.fb.group({
      email: 'doantheanh172tb@gmail.com',
      password: '',
      subject: this.fb.group({
        nodejs: true,
        reactjs: true,
        angular: false,
      })
    })
  }

}
