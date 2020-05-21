import {Component, OnInit} from '@angular/core';
import {Contact} from './models/contact';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {


  contacts: Contact[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    const url = 'http://localhost:3000/Contact';
    const observable = this.httpClient.get<Contact[]>(url);
    observable.subscribe(cont => {this.contacts = cont; });
  }

  // Function that is fired by add event of contact form, passing a contact and adding it to de array.
  addContact($event: Contact) {
    this.contacts.push($event);
  }
}


