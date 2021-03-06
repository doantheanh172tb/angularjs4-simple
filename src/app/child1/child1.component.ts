import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output() parentClickEvent = new EventEmitter<boolean>();

  childClick(isAdd) {
    this.parentClickEvent.emit(isAdd);
  }

  constructor() { }

  ngOnInit() {
  }

}
