import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./feat/home/home').then(m => m.HomeComponent),
    },
    {
        path: 'signal-form',
        loadComponent: () => import('./feat/login/login').then(m => m.LoginComponent),
    }
];
