import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  value: number = 0;
  changeValue(isAdd: boolean) {
    if (isAdd) {
      this.value += 1;
    } else {
      this.value -= 1;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
