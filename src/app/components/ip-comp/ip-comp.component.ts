import { Component, OnInit } from '@angular/core';
import { IpService } from './../../services/ip.service'

@Component({
  selector: 'app-ip-comp',
  templateUrl: './ip-comp.component.html',
  styleUrls: ['./ip-comp.component.css'],
})
export class IpCompComponent implements OnInit {
  ip: String;

  constructor(private ipService: IpService) { }

  ngOnInit(): void {
    this.ipService.getIp()
      .then(ip => this.ip = ip)
      .catch(err => console.log(err));
  }
}
