import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signUp/signUp.component';

export const routes: Routes = [
    {
        path:"login", 
        component: LoginComponent
    },
    {
        path:"signUp", 
        component: SignUpComponent
    }
];
