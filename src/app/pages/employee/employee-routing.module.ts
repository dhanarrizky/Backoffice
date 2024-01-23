import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AuthGuard } from '../../AuthGuard/AuthGuard';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

export const routes: Routes = [
    {
        path:'',
        title:'employees',
        canActivate: [AuthGuard],
        children:[
            {
                path:'',
                title:'employee list',
                component:EmployeeListComponent
            },
            {
                path:'detail/:username',
                title:'employee Detail',
                component:EmployeeDetailComponent
            },
            {
                path:'add-employee',
                title:'add new employee',
                component:AddEmployeeComponent
            },
            {
                path: '',
                redirectTo: "",
                pathMatch: "full"
            }
        ]
    },
    {
        path:'**',
        redirectTo:'/Not-Found'
    }
];