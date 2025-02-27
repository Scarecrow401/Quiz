import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'register',
        loadChildren: () =>
            import('../app/auth/auth.routes').then((module) => module.registerRoutes),
    },
];
