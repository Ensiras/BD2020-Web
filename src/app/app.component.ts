import {Component} from '@angular/core';
import {Contact} from './models/contact';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')] ),
      surname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
      email: new FormControl('', [Validators.email, Validators.required])
    }
  );

  addContact() {
    this.contacts.push(this.contactForm.value);
    this.contactForm.reset();
  }

  deleteContact(i: number) {
    this.contacts.splice(i, 1);
  }

  addFramework() {
    console.log('hallo');
  }
}


