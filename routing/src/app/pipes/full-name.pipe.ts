import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../models/contact.interface';

@Pipe({
    name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
    transform(contact: IContact, ...args: unknown[]): string {
        return `${contact.name} ${contact.surname}`;
    }
}
