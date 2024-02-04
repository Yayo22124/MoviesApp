import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'app/movies'
    },
    {
        path: 'app/movies',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    }
];
