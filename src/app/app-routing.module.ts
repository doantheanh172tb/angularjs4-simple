import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CommonModule } from '@angular/common';

const routesConfig: Routes = [
    { path: 'contact-detail/:id', component: ContactDetailComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routesConfig), CommonModule],
    declarations: [
        ContactsComponent,
        ContactDetailComponent,
        PagenotfoundComponent,
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { };