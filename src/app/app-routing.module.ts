import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routesConfig: Routes = [
    { path: 'contact-detail', component: ContactDetailComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routesConfig)],
    declarations: [
        ContactsComponent,
        ContactDetailComponent,
        PagenotfoundComponent,
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { };