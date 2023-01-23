import { Injectable } from '@angular/core';
import { LIST_CONTACT } from '../mocks/contacts.mock';
import { IContact } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


    listContact: IContact[] = LIST_CONTACT;

  constructor() { }

  getContacts(sex?: string): Promise<IContact[]>{
    if(sex == 'male' || sex == 'female'){
        let listContactFilter: IContact[] = this.listContact.filter((contact) => contact.sex == sex);
        return Promise.resolve(listContactFilter)
    }else if(sex == 'all'){
        return Promise.resolve(this.listContact);
    }else{
        return Promise.reject('Filtro no valido');
    }
  }
}
