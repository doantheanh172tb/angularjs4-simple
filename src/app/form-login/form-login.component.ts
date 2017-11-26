import { Component, OnInit } from '@angular/core';
import { SignInService } from '../services/signIn.service'

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
  providers: [SignInService]
})
export class FormLoginComponent implements OnInit {

  constructor(private signInService: SignInService) { }

  onSubmit(formSignIn) {
    this.signInService.signIn(formSignIn.value)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  ngOnInit() {
  }

}
