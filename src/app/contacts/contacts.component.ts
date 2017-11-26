import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = [
    { id: 1, name: 'the anh', phoneNumber: '0999999999' },
    { id: 2, name: 'bon bon', phoneNumber: '0999999992' },
    { id: 3, name: 'vo yeu', phoneNumber: '0999999993' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
