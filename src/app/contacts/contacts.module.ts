import { NgModule } from "@angular/core";
import { ContactsComponent } from "./contacts.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routerConfig: Routes = [
    { path: 'contacts', component: ContactsComponent }
]

@NgModule({
    declarations: [ContactsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routerConfig),
    ]
})

export class ContactsModule { };