import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    // * Definición del formulario
    myForm: FormGroup = new FormGroup({});

    // * Inyección de la clase FormBuilder para construir el FormGroup.
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        // * Iniciación de los campos del form y sus valores por default.
        this.myForm = this.formBuilder.group({
            name: '',
            surname: '',
            email: '',
            phone: '',
            direction: '',
        });

        // * Subscribe a las modificaciones que surgan en el form. Estos seran mostrados por consola.
        // * Muestra por consola los cambios. Forma estándar.
        // this.myForm.valueChanges.subscribe((changes) => {
        //     console.log(changes);
        // });
        // * Muestra por consola los cambios. Forma abreviada.
        this.myForm.valueChanges.subscribe(console.log);
    }
}
