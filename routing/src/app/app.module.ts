import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';

// ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

// ANGULAR MATERIAL CUSTOM
import { MaterialModule } from './modules/material/material.module';

// MAIN COMPONENT
import { AppComponent } from './app.component';

// PAGES ----> ./src/app/pages/
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailtPageComponent } from './pages/contact-detailt-page/contact-detailt-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

// FORMS ----> ./src/app/components/form/
import { FormComponent } from './components/forms/form/form.component';
import { FormArrayComponent } from './components/forms/form-array/form-array.component';
import { FormNestedComponent } from './components/forms/form-nested/form-nested.component';
import { FormValidatedComponent } from './components/forms/form-validated/form-validated.component';

// PIPES ----> ./src/app/components/pipes/
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';

// ANGULAR PIPES CUSTOM
import { CalculatePipe } from './pipes/calculate.pipe';
import { MultiplyPipe } from './pipes/multiply.pipe';

// ANGULAR LOCALE DATA
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';

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
        LoginFormComponent,
        FullNamePipe,
        RandomUserComponent,
        RandomContactPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        // Módulo custom de Angular Material.
        MaterialModule,
        // Formularios Reactivos.
        ReactiveFormsModule,
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
