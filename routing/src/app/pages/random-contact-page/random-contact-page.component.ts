import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/random-user.interface';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
    selector: 'app-random-contact-page',
    templateUrl: './random-contact-page.component.html',
    styleUrls: ['./random-contact-page.component.css'],
})
export class RandomContactPageComponent implements OnInit {
    contact: IRandomContact | undefined;

    constructor(private randomUserService: RandomUserService) {}

    async ngOnInit(): Promise<void> {
        await this.getNewContact();
    }

    getNewContact() {
        // this.randomUserService.getRandomContact().subscribe(
        //     (response: Results) => {
        //         this.contact = response.results[0];
        //     },
        //     (error) => console.error(`Error: ${error}`)
        // );
        // console.table(this.contact?.name);

        this.randomUserService.getRandomContact().subscribe({
            next: (response: Results) => {
                this.contact = response.results[0];
            },
            error: (error) => console.error(`Error: ${error}`),
            complete: () => console.info('Petición randomContact finalizada.'),
        });
    }

    getListContact(n: number) {
        this.randomUserService.getRandomContacts(n).subscribe({
            next: (response: Results[]) => {
                // this.contact = response.results[0];
                console.log(response);
            },
            error: (error) => console.error(`Error: ${error}`),
            complete: () => console.info('Petición randomContacts finalizada.'),
        });
    }
}
