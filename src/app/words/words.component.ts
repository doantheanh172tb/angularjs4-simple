import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  filterWord = "XEM_TAT_CA";
  isOnAdd = false;
  newVn = "";
  newEn = "";
  arrWords = [
    { id: 1, en: 'action', vn: 'Hành động', memorized: true },
    { id: 2, en: 'action 1', vn: 'Hành động 1', memorized: false },
    { id: 3, en: 'action 2', vn: 'Hành động 2', memorized: true },
    { id: 4, en: 'action 3', vn: 'Hành động 3', memorized: false },
    { id: 5, en: 'action 4', vn: 'Hành động 4', memorized: false },
    { id: 6, en: 'action 5', vn: 'Hành động 5', memorized: true }
  ]
  toggleAddWord() {
    this.isOnAdd = !this.isOnAdd;
  }
  constructor() { }

  ngOnInit() {
    console.log("WordsComponent::ngOnInit");
  }

  addWord() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    })
    this.newEn = "";
    this.newVn = "";
    this.isOnAdd = !this.isOnAdd;
  }

  removeItemWord(id: number) {
    const index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index, 1);
  }
}
