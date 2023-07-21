import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http:HttpClient) { }

  //1.get-all-contacts function - used to fetch all data from given api
  getAllContacts(){
    return this.http.get('http://localhost:3000/contacts')
  }

//2. view-contact api  - used to fetch data of a particular contact id 
  viewcontact(contactId:any){
    //api call - asynchronous
 return  this.http.get('http://localhost:3000/contacts/'+contactId)
  }

  //3. api call to get details of a particular group
  getGroup(groupId:string){
    // api call - asynchronous
 return this.http.get('http://localhost:3000/groups/'+groupId)
}

//4.api call to fetch all group data
getAllGroups(){
  // api call - asynchronous
  return this.http.get('http://localhost:3000/groups')
 }

 //5.api call to add/store contact details to server
 addcontact(contact:any){
 return this.http.post('http://localhost:3000/contacts/',contact)
 }
 //6.api call to delete a particular contact from server
 removeContact(id:any){
  return this.http.delete('http://localhost:3000/contacts/'+id)
 }

 //api call to update a existing contact from server
   updateContact(id:any,contact:any){
    return this.http.put('http://localhost:3000/contacts/'+id,contact)
   }
 }

