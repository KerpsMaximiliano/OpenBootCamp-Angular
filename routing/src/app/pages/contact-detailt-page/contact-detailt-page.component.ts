import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { IContact } from 'src/app/models/contact.interface';

import { IRandomContact } from 'src/app/models/random-user.interface';

@Component({
    selector: 'app-contact-detailt-page',
    templateUrl: './contact-detailt-page.component.html',
    styleUrls: ['./contact-detailt-page.component.css'],
})
export class ContactDetailtPageComponent implements OnInit {
    id: any | undefined;

    // contact: IContact = {
    //     id: 0,
    //     name: '',
    //     surname: '',
    //     email: '',
    //     sex: 'female',
    // };

    contact: IRandomContact | undefined;
    filterPrev: string = 'all';

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: any) => {
            if (params.id) {
                this.id = params.id;
            }
        });

        // Lectura del contact enviado por navegación
        if (history.state.data) {
            this.contact = history.state.data;
        }

        if (history.state.filter) {
            this.filterPrev = history.state.filter;
        }
    }
}
