import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { IpService } from './services/ip.service'

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { WordsComponent } from './words/words.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { PersonComponent } from './person/person.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { CardComponent } from './card/card.component';
import { LeanPipeComponent } from './lean-pipe/lean-pipe.component';
import { RoundPipe } from './CustomPipe/round.pipe';
import { IpCompComponent } from './components/ip-comp/ip-comp.component'

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    BookComponent,
    UserFormComponent,
    WordsComponent,
    ListPersonComponent,
    PersonComponent,
    ParentCompComponent,
    ChildCompComponent,
    Parent1Component,
    Child1Component,
    Child2Component,
    Parent2Component,
    CardComponent,
    LeanPipeComponent,
    RoundPipe,
    IpCompComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
