import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'app-ip-comp',
  templateUrl: './ip-comp.component.html',
  styleUrls: ['./ip-comp.component.css']
})
export class IpCompComponent {
  ip: String;
  constructor(private http: Http) {
    this.http.get('http://ip.jsontest.com/')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.ip = resJson.ip)
      .catch(err => console.log(err));
  }

}
