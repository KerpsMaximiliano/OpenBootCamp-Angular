import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
    constructor(private router: Router) {}
    ngOnInit(): void {
        let token = sessionStorage.getItem('token');
        if (token) {
            this.router.navigate(['home']);
        }
    }
    loginUser() {
        sessionStorage.setItem('token', 'true'); // JWT
        this.router.navigate(['contacts']);
    }
}
