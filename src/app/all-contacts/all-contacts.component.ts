import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/Model/Mycontact';
import { HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
   Allcontacts:MyContact[]=[]
   searchKey:string=''
 constructor(private api:ApiService){
  
 }
  ngOnInit(): void {
   this.getAllContact()
    }

    getAllContact(){
     // asynchronous
    this.api.getAllContacts()
    .subscribe((result:any)=>{
      console.log(result);
      this.Allcontacts = result
      })
  }

  //deleteContact
   deleteContact(id:any){
  this.api.removeContact(id)
  .subscribe((result:any)=>{
    console.log(result);
    this.getAllContact()
    })
}
 }
