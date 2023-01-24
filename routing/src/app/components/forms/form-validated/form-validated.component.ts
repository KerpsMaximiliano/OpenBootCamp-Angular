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
            name: ['', Validators.required],
            surname: '',
            edad: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.min(18),
                    Validators.max(115),
                ]),
            ],
            email: [
                '',
                Validators.compose([Validators.required, Validators.email]),
            ],
            password: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z]*'),
                ]),
            ],
            accept: [false, Validators.requiredTrue],
        });
    }
}
// -21:37
