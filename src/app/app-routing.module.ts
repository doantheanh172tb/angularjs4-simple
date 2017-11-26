import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactsModule } from './contacts/contacts.module';

const routesConfig: Routes = [
    { path: 'contact-detail/:id', component: ContactDetailComponent },
    { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent },
];

@NgModule({
    imports: [
        ContactsModule,        
        RouterModule.forRoot(routesConfig), 
        CommonModule,
    ],
    declarations: [
        ContactDetailComponent,
        PagenotfoundComponent,
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { };