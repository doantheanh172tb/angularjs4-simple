import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  @Input() txtBtn: String;

  @Output() myClick = new EventEmitter();

  addMyParent() {
    this.myClick.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
