import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { WordsComponent } from './words/words.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    BookComponent,
    UserFormComponent,
    WordsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
