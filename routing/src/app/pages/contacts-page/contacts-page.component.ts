import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

// import { IContact } from 'src/app/models/contact.interface';
// import { ContactService } from 'src/app/services/contact.service';

import { IRandomContact, Results } from 'src/app/models/random-user.interface';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
    selector: 'app-contacts-page',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.css'],
})
export class ContactsPageComponent implements OnInit {
    filterSex: string = 'all';
    // contacts: IContact[] = [];
    listRandomContact: IRandomContact[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        // private contactService: ContactService,
        private randomUserService: RandomUserService
    ) {}

    ngOnInit(): void {
        // Query Params.
        this.route.queryParams.subscribe((params: any) => {
            console.log('Query params: ', params.sex);
            if (params.sex) {
                this.filterSex = params.sex;
                if (params.sex === 'female' || params.sex === 'male') {
                    // Implements RandomListContact.
                    this.randomUserService
                        .getRandomContacts(10, params.sex)
                        .subscribe({
                            next: (response: Results) => {
                                // this.contact = response.results[0];
                                // console.log(response);
                                response.results.forEach(
                                    (
                                        randomContact: IRandomContact,
                                        index: number
                                    ) => {
                                        this.listRandomContact.push(
                                            randomContact
                                        );
                                    }
                                );
                                console.log(this.listRandomContact);
                            },
                            error: (error) => console.error(`Error: ${error}`),
                            complete: () =>
                                console.info(
                                    'Petición randomContacts finalizada.'
                                ),
                        });
                } else {
                    this.randomUserService.getRandomContacts(10).subscribe({
                        next: (response: Results) => {
                            response.results.forEach(
                                (
                                    randomContact: IRandomContact,
                                    index: number
                                ) => {
                                    this.listRandomContact.push(randomContact);
                                }
                            );
                            console.log(this.listRandomContact);
                        },
                        error: (error) => console.error(`Error: ${error}`),
                        complete: () =>
                            console.info('Petición randomContacts finalizada.'),
                    });
                }
            }
            // Obtener listContact.
            // this.contactService
            //     .getContacts(this.filterSex)
            //     .then((list) => (this.contacts = list))
            //     .catch((error) =>
            //         console.error('Ha ocurrido un error.' + error)
            //     )
            //     .finally(() => console.info('Petición finalizada.'));
        });
    }

    // Example
    // Paso de información entre @Components a través del ESTADO.
    // backToHome(contact: IContact) {
    backToHome(contact: IRandomContact) {
        let navigationExtras: NavigationExtras = {
            state: {
                data: contact,
            },
        };
        this.router.navigate(['/home'], navigationExtras);
    }
}
