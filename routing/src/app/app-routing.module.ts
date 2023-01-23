import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailtPageComponent } from './pages/contact-detailt-page/contact-detailt-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'login',
        component: LoginPageComponent,
    },
    {
        path: 'home',
        component: HomePageComponent,
        canActivate: [AuthGuard],
        // children: [
        //   {
        //     path: 'hijo',
        //     component: component,
        //     canActivate: [AuthGuard],
        //   }
        // ]
    },
    {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'contacts/:id',
        component: ContactDetailtPageComponent,
        canActivate: [AuthGuard],
    },
    {
        path: '**',
        component: NotFoundPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
