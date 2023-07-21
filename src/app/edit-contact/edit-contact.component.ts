import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/Model/Mycontact';
import { MyGroup } from 'src/Model/Mygroup';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactId: string ='';
  contact: MyContact ={}
  groupId: string='' 
  groupName:string=''
  groups:MyGroup[]=[]
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService,private router:Router) {
  }

  ngOnInit(): void {
    // to fetch contact id from url
    this.activatedRoute.params.subscribe(
      (data: any) => {
        this.contactId = data['id']
        console.log(this.contactId);
      })

    // to fetch details of that particular id
    if (this.contactId) {
      this.api.viewcontact(this.contactId).
        subscribe((result: any) => {
          console.log(result);
          this.contact = result
          this.groupId = result.groupId
          console.log(this.groupId);
          //to fetch details of a particular group
          this.api.getGroup(this.groupId).subscribe((data: any) => {
            console.log(data);
            this.groupName = data['name']
          })
          //fetch all group
          this.api.getAllGroups().subscribe((result:any)=>{
            console.log(result);
            this.groups = result
            })
        })
        }
      }

   editcontact(contact:MyContact){
    this.api.updateContact(this.contactId,contact)
    .subscribe((result)=>{
      console.log(result);
     alert('contact updated successfully') 
    this.router.navigateByUrl('')
    })
   }   
   }
  
