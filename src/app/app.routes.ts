import { Routes } from '@angular/router';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path:'',
        component:EmployeeListComponent,
        children:[
            {
                path:'add-employees',
                component:AddEmployeeComponent
            },
            {
                path:'detail/:username',
                component:EmployeeDetailComponent
            }
        ]
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'*',
        component:NotFoundPageComponent
    }
];
