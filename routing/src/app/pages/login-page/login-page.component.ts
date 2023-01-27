import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
    // email: string = '';
    // password: string = '';
    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit(): void {
        let token = sessionStorage.getItem('token');
        if (token) {
            this.router.navigate(['home']);
        }
    }

    loginUser(value: any) {
        let { email, password } = value;

        this.authService.login(email, password).subscribe(
            (response) => {
                if (response.token) {
                    sessionStorage.setItem('token', response.token);
                    this.router.navigate(['home']);
                }
            },
            (error) => console.error('Ha ocurrido un error', { error })
        );
        // sessionStorage.setItem('token', 'true'); // JWT
        // this.router.navigate(['contacts']);
    }
}
