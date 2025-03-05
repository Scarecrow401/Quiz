import * as authEffects from './app/auth/store/effects';
import * as homeEffects from './app/home/store/effects';

import { provideState, provideStore } from '@ngrx/store';
import { authFeatureKey, authReducer } from './app/auth/store/reducers';
import { quizItemsFeatureKey, quizItemsReducer } from './app/home/store/reducers';

import { provideHttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(),
        provideRouter(appRoutes),
        provideStore(),
        provideState(authFeatureKey, authReducer),
        provideState(quizItemsFeatureKey, quizItemsReducer),
        provideEffects(authEffects, homeEffects),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: !isDevMode(),
            autoPause: true,
            trace: false,
            traceLimit: 75,
        }),
    ],
});
