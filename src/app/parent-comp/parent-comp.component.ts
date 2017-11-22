import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  value = 0;
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
