import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
    token: string | null = null;
    contactSelect: IContact | undefined;
    constructor(private router: Router) {}
    ngOnInit(): void {
        this.token = sessionStorage.getItem('token');
        if (history.state.data) {
            console.log(history.state.data);
            this.contactSelect = history.state.data;
        }
    }
    goContacts(): void {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                sex: 'all',
            },
        };
        this.router.navigate(['contacts'], navigationExtras);
    }
}
