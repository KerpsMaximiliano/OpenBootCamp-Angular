import { Component } from '@angular/core';
import { IContact } from 'src/app/models/contact.interface';
import { IPlayer } from 'src/app/models/player.interface';

@Component({
    selector: 'app-pipes-example',
    templateUrl: './pipes-example.component.html',
    styleUrls: ['./pipes-example.component.css'],
})
export class PipesExampleComponent {
    dob: Date = new Date(1996, 8, 2);

    change: boolean = true;

    name: string = 'Maximiliano';

    playerOne: IPlayer = {
        name: this.name,
        points: [10, 20, 30, 0],
    };
    playerTwo: IPlayer = {
        name: 'Pamela',
        points: [0, 80, 10, 5],
    };

    PI: number = 3.1415926535897;

    priceOne: number = 1000;
    priceTwo: number = 100.025;

    person: IContact = {
        id: 0,
        name: this.name,
        surname: 'Kerps',
        sex: 'male',
        email: 'maximilianokerps@gmail.com',
    };

    count: number = 0.3512;

    text: string = 'Soldado Bordon 998, Paraná, Entre Ríos, Argentina.';

    get dateFormat() {
        return this.change ? 'shortDate' : 'fullDate';
    }

    setFormat() {
        this.change = !this.change;
    }
}
