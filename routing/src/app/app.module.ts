import { NgModule } from '@angular/core';
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
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';

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
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
