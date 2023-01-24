import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
    selector: 'app-form-array',
    templateUrl: './form-array.component.html',
    styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
    myFormArray: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.myFormArray = this.formBuilder.group({
            name: '',
            surname: '',
            // Definición e inicialización de lista de teléfonos vacia.
            phones: this.formBuilder.array([]),
        });
    }

    // * Método getter para obtener el FormArray de la lista de teléfonos.
    get phoneForm(): FormArray {
        return this.myFormArray.get('phones') as FormArray;
    }

    // * Método para añadir teléfonos a la lista.
    addPhone() {
        const newPhone = this.formBuilder.group({
            pre: '',
            number: '',
        });
        this.phoneForm.push(newPhone);
    }

    // * Método para eliminar télefonos de la lista.
    deletePhone(i: number) {
        this.phoneForm.removeAt(i);
    }
}
