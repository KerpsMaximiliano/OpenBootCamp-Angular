import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// PAGES ----> ./src/app/pages/
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailtPageComponent } from './pages/contact-detailt-page/contact-detailt-page.component';

// FORMS ----> ./src/app/components/form/
import { FormComponent } from './components/forms/form/form.component';
import { FormNestedComponent } from './components/forms/form-nested/form-nested.component';
import { FormArrayComponent } from './components/forms/form-array/form-array.component';
import { FormValidatedComponent } from './components/forms/form-validated/form-validated.component';

// ANGULAR MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';

// ANGULAR PIPES
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { CalculatePipe } from './pipes/calculate.pipe';

// ANGULAR LOCALE DATA
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES); // Registración del LOCALE_ID en 'es'.

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        LoginPageComponent,
        NotFoundPageComponent,
        ContactsPageComponent,
        ContactDetailtPageComponent,
        FormComponent,
        FormNestedComponent,
        FormArrayComponent,
        FormValidatedComponent,
        PipesExampleComponent,
        MultiplyPipe,
        CalculatePipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
    ],
    providers: [
        // Registramos el Locales en ES para que los PIPES sean idioma: Español.
        {
            provide: LOCALE_ID,
            useValue: 'es',
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
