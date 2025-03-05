import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { QuizItemsService } from '../services/home.service';
import { QuizItemInterface } from '../types/quiz-item.interface';
import { quizItemsActions } from './actions';

export const getQuizItemsEffect = createEffect(
    (actions$ = inject(Actions), quizItemsService = inject(QuizItemsService)) => {
        return actions$.pipe(
            ofType(quizItemsActions.getQuizItems),
            switchMap(({ userId }) =>
                quizItemsService.getQuizItems(userId).pipe(
                    map((quizItems: QuizItemInterface[]) => {
                        return quizItemsActions.getQuizItemsSuccess({ quizItems });
                    }),
                    catchError((errorResponse: HttpErrorResponse) =>
                        of(
                            quizItemsActions.getQuizItemsFailure(
                                errorResponse.error.errors
                            )
                        )
                    )
                )
            )
        );
    },
    { functional: true }
);

export const navigateToQuizEffect = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) => {
        return actions$.pipe(
            ofType(quizItemsActions.navigateToQuiz),
            tap((actions) => router.navigate(['/' + actions.quizId]))
        );
    },
    { functional: true, dispatch: false }
);
