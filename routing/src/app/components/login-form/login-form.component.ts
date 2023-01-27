import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Import form
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

// Import auth
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
    loginForm: FormGroup = new FormGroup({});

    @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>();

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: [
                '',
                Validators.compose([Validators.required, Validators.email]),
            ],
            password: ['', Validators.required],
        });
    }

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }

    // Submit loginForm.
    submitLogin() {
        if (this.loginForm.valid) {
            // console.table(this.loginForm.value);
            // TODO: Petición a authService.
            // this.authService.login()
            this.loginAction.emit(this.loginForm.value);
            // this.loginForm.reset();
        }
    }
}
