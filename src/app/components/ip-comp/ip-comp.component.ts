import { Component, OnInit } from '@angular/core';
import { IpService } from './../../services/ip.service'

@Component({
  selector: 'app-ip-comp',
  templateUrl: './ip-comp.component.html',
  styleUrls: ['./ip-comp.component.css'],
  providers: [IpService]
})
export class IpCompComponent {
  ip: String;
  constructor(private ipService: IpService) {
    this.ipService.getIp()
      .then(ip => this.ip = ip)
      .catch(err => console.log(err));
  }

}
