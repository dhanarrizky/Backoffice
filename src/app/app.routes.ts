import { Routes } from '@angular/router';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './pages/employee/employee-detail/employee-detail.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './AuthGuard/AuthGuard';

export const routes: Routes = [
    {
        path: 'employee',
        loadChildren: () => import("./pages/employee/employee-routing.module").then((m) => m.routes)
    },
    {
        path:'login',
        title:'login backofficce',
        component:LoginComponent
    },
    {
        canActivate: [AuthGuard],
        path:'Not-Found',
        title:'Page Not Found',
        component:NotFoundPageComponent
    },
    {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo:'/Not-Found'
    }
];