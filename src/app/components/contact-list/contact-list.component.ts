import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../models/contact';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[];

  deleteContact(i: number) {
    this.contacts.splice(i, 1);
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

}
