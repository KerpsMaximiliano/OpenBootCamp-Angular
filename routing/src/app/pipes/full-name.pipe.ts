import { Pipe, PipeTransform } from '@angular/core';

// import { IContact } from '../models/contact.interface';

import { IRandomContact } from '../models/random-user.interface';

@Pipe({
    name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
    // transform(contact: IContact, ...args: unknown[]): string {
    //      return `${contact.name} ${contact.surname}`;
    // }

    transform(contact: IRandomContact, ...args: unknown[]): string {
        return `${contact.name.title} ${contact.name.first} ${contact.name.last}`;
    }
}
