import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  contacts: IContact[] = [
    {
      id: 0,
      name: 'Maximiliano',
      surname: 'Kerps',
      email: 'maximilianokerps@gmail.com'
    },
    {
      id: 1,
      name: 'nameExampleOne',
      surname: 'surnameExampleOne',
      email: 'emailOne@example.com'
    },
    {
      id: 2,
      name: 'nameExampleTwo',
      surname: 'surnameExampleTwo',
      email: 'emailTwo@example.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }
}
