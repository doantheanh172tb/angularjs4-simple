import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  text: String;
  childClick(isAdd) {
    if (isAdd) {
      this.text = "sssss";
    } else {
      this.text = "aaaaa";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
