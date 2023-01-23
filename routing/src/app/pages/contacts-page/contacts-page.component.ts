import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

    filterSex: string = 'all';
    contacts: IContact[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
        // Query Params.
        this.route.queryParams.subscribe((params: any) => {
            console.log('Query params: ', params.sex);
            if(params.sex){
                this.filterSex = params.sex
            }
            // Obtener listContact.
            this.contactService.getContacts()
                .then((list) => this.contacts = list)
                .catch((error) => console.error('Ha ocurrido un error.' + error))
                .finally(() => console.info('Petición finalizada.'));
        });
  }

  // Example
  // Paso de información entre @Components a través del ESTADO.
  backToHome(contact: IContact){
    let navigationExtras: NavigationExtras = {
        state: {
            data: contact
        }
    }
    this.router.navigate(['/home'], navigationExtras);
  }
}
