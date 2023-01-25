import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-validated',
    templateUrl: './form-validated.component.html',
    styleUrls: ['./form-validated.component.css'],
})
export class FormValidatedComponent implements OnInit {
    myFormValidated: FormGroup = new FormGroup({});
    constructor(private formBuilder: FormBuilder) {}
    ngOnInit(): void {
        this.myFormValidated = this.formBuilder.group({
            // Campo requerido.
            name: ['', Validators.required],
            surname: '',
            // Campo requerido, minmax.
            old: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.min(18),
                    Validators.max(115),
                ]),
            ],
            // Campo requerito, type: email.
            email: [
                '',
                Validators.compose([Validators.required, Validators.email]),
            ],
            // Campo requerido, regex.
            password: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z]*'),
                ]),
            ],
            // Campo boolean, true requerido.
            accept: [false, Validators.requiredTrue],
        });
    }
    get name() {
        return this.myFormValidated.get('name');
    }
    get surame() {
        return this.myFormValidated.get('surname');
    }
    get old() {
        return this.myFormValidated.get('old');
    }
    get email() {
        return this.myFormValidated.get('email');
    }
    get password() {
        return this.myFormValidated.get('password');
    }
    get accept() {
        return this.myFormValidated.get('accept');
    }

    // SUBMIT
    sendForm() {
        // Control de validaciones.
        if (this.myFormValidated.valid) {
            console.table(this.myFormValidated);
            // Reset inputs.
            this.myFormValidated.reset();
        }
    }
}
