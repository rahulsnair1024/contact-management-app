import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/Model/Mycontact';
import { HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contactId: any
  contact: MyContact = {}
  groupId:string=""
  groupName:string=""
  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    // to get path parameter from url
    this.activatedRoute.params
      .subscribe((data: any) => {
        console.log(data['id']);
        this.contactId = data['id']

      })

    //call api to get details of a particular contact
    this.api.viewcontact(this.contactId)
      .subscribe((result: any) => {
        this.contact = result
        this.groupId = result.groupId
        console.log(this.groupId);
        //call api to get details of a particular group
        this.api.getGroup(this.groupId)
          .subscribe((result: any) => {
            console.log(result);
            this.groupName = result.name

          })
      })

  }

}


