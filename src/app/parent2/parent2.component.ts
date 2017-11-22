import { Component, OnInit, ViewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component'

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(Child2Component)
  myChild2: Child2Component;

  onAddForChild2() {
    this.myChild2.childValue++;
  }

}
