import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('../app/home/home.routes').then((module) => module.homeRoutes),
    },
    {
        path: 'register',
        loadChildren: () =>
            import('../app/auth/auth.routes').then((module) => module.registerRoutes),
    },
    {
        path: ':quizId',
        loadChildren: () =>
            import('../app/quiz/quiz.routes').then((module) => module.homeRoutes),
    },
];
