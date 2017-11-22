import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lean-pipe',
  templateUrl: './lean-pipe.component.html',
  styleUrls: ['./lean-pipe.component.css']
})
export class LeanPipeComponent implements OnInit {
  birthday = new Date(2017, 7, 17);
  person = {
    name: "doan gia thịnh",
    age: 27,
    address: Promise.resolve("Lương thường, thái thụy, thái bình")
  };
  constructor() { }

  ngOnInit() {
  }

}
