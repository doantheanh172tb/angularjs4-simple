import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

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
    console.log(this.formSignUp);
  }

  ngOnInit() {
    this.formSignUp = this.fb.group({
      email: ['', [Validators.required, gmailValidator]],
      password: '',
      subject: this.fb.group({
        nodejs: true,
        reactjs: true,
        angular: false,
      })
    })
  }
}

function gmailValidator(formControl: FormControl) {
  console.log('gmailValidator');
  if (formControl.value.includes('@gmail.com')) {
    return null;
  }
  return { gmail: true };
}
