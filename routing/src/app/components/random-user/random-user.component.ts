import { Component, Input } from '@angular/core';
import { IRandomContact } from 'src/app/models/random-user.interface';

@Component({
    selector: 'app-random-user',
    templateUrl: './random-user.component.html',
    styleUrls: ['./random-user.component.css'],
})
export class RandomUserComponent {
    @Input() randomContact: IRandomContact | undefined;
}
