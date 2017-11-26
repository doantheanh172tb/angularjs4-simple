import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  onSubmit(formSignIn) {
    const url = "http://localhost:3000/signin";
    const headers = new Headers({
      'Content-Type': 'application/json'
    })
    const body = JSON.stringify(formSignIn.value);
    this.http.post(url, body, { headers })
      .toPromise()
      .then(res => res.json())
      .then(resJson => console.log(resJson))
      .catch(err => console.log(err));
  }

  constructor(private http: Http) { }

  postToExpress() {
    const url = "http://localhost:3000/signin";
    const headers = new Headers({
      'Content-Type': 'application/json'
    })
    const body = JSON.stringify({ name: 'the anh' });
    this.http.post(url, body, { headers })
      .toPromise()
      .then(res => res.json())
      .then(resJson => console.log(resJson))
      .catch(err => console.log(err));
  }
  ngOnInit() {
  }

}
