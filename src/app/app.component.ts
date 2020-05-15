import {Component} from '@angular/core';
import {Contact} from './models/contact';
import {FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';

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

  contactForm: any = new FormGroup({
      firstName: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email)
    }
  );
  contactEdited: any;

  addContact() {
    this.contacts.push(this.contactForm.value);
    this.contactForm.reset();
    this.contactEdited.setValue('hallo?');
  }

  deleteContact(i: number) {
    this.contacts.splice(i, 1);
  }

  editContact(i: number) {

  }
}


