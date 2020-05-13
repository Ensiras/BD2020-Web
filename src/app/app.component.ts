import { Component } from '@angular/core';
import { Contact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  contacts: Contact[] = [
    {firstName: 'Fred', surname: 'de Boer', email: 'fredje1966@hotmail.com'},
    {firstName: 'Jannie', surname: 'Bijvens', email: 'superjannie@yahoo.com'},
    {firstName: 'Bert', surname: 'de Boer', email: 'bertversebroodjes@live.nl'}
  ];
  newContact = {} as Contact;

  addContact() {
    this.contacts.push(this.newContact);
  }

}


