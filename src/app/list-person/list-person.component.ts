import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPerson = [
    {name: "Bon Bon", age: 0.3},
    {name: "bố Bon", age: 27},
    {name: "mẹ Bon", age: 26},
    {name: "ông Bon", age: 64},
    {name: "bà Bon", age: 58}
  ];
  constructor() { }

  ngOnInit() {
  }

}
