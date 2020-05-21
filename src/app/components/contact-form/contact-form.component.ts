import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../../models/contact';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  // New field 'add' that holds an EventEmitter (so just an event) that can pass a contact.
  @Output() add = new EventEmitter<Contact>();

  contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')] ),
      surname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
      email: new FormControl('', [Validators.email, Validators.required])
    }
  );

  ngOnInit(): void {
  }

  // The function linked to the add button of the form emitting the event, passing the values of the form.
  addContact() {
    this.add.emit(this.contactForm.value);
  }

}
