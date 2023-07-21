import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

  // path set up for component
const routes: Routes = [
   //path AllContactComponent - localhost:4200
   {
    path:'' , component:AllContactsComponent
   },
   //path AddContactComponent: localhost:4200/add-contact
  {
    path:'add-contact', component:AddContactComponent
   },
  //  path edit contact- localhost:4200/edit-contact/id
  {
    path:'edit-contact/:id' , component:EditContactComponent
  },
  //path view component - localhost:4200/view-contact/id
  {
    path:'view-contact/:id', component:ViewContactComponent
  },
  {
    path:'**', component:PageNotFoundComponent
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
