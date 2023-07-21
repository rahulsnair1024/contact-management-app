import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/Model/Mycontact';
import { ApiService } from '../services/api.service';
import { MyGroup } from 'src/Model/Mygroup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit  {

  contact:MyContact={}
  allGroups:MyGroup[]=[]
  
  constructor(private api:ApiService,private router:Router){
    this.contact.groupId = "Select A Group"
  }

  ngOnInit(): void {
    this.api.getAllGroups()
    .subscribe((result:any)=>{
     console.log(result);
     this.allGroups = result
      })
    }

 addcontact(){
  this.api.addcontact(this.contact)
  .subscribe((result:any)=>{
    console.log(result);
    alert('new contact added successfully!!')
    this.router.navigateByUrl('')
   
    
  })
 }
}









