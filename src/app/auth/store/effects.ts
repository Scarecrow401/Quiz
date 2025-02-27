import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { AuthService } from '../services/auth.service';
import { authActions } from './actions';

export const registerEffect = createEffect(
    (
        actions$ = inject(Actions),
        authService = inject(AuthService),
        persistanceService = inject(PersistanceService)
    ) => {
        return actions$.pipe(
            ofType(authActions.registerInit),
            switchMap(({ payload }) =>
                authService.register(payload).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        persistanceService.set('accessToken', currentUser.token);
                        return authActions.registerSuccess({ currentUser });
                    }),
                    catchError((errorResponse: HttpErrorResponse) =>
                        of(authActions.registerFailure(errorResponse.error.errors))
                    )
                )
            )
        );
    },
    { functional: true }
);

export const redirectAfterRegisterEffect = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) => {
        return actions$.pipe(
            ofType(authActions.registerSuccess),
            tap(() => router.navigateByUrl('/'))
        );
    },
    { functional: true, dispatch: false }
);
