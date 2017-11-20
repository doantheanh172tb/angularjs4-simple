import { Component } from '@angular/core';

@Component({
    templateUrl: './title.html',
    selector: 'titleComp',
    styleUrls:[
        './title.css'
    ]
})

export class TitleComponent{
    title="day la title";
    desc="day la description";
}