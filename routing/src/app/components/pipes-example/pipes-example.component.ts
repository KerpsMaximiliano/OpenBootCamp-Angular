import { Component } from '@angular/core';

@Component({
    selector: 'app-pipes-example',
    templateUrl: './pipes-example.component.html',
    styleUrls: ['./pipes-example.component.css'],
})
export class PipesExampleComponent {
    dob: Date = new Date(1996, 8, 2);
    change: boolean = true;
    name: string = 'Maximiliano';

    get dateFormat() {
        return this.change ? 'shortDate' : 'fullDate';
    }

    setFormat() {
        this.change = !this.change;
    }
}
