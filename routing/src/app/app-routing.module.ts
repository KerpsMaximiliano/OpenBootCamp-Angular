import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailtPageComponent } from './pages/contact-detailt-page/contact-detailt-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: 'login',
        component: LoginPageComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
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
                path: 'tasks',
                component: TaskPageComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'random',
                component: RandomContactPageComponent,
                canActivate: [AuthGuard],
            },
        ],
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
