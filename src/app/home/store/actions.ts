import { createActionGroup, props } from '@ngrx/store';

import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

export const quizItemsActions = createActionGroup({
    source: 'Quiz Items',
    events: {
        'Get Quiz Items': props<{ userId: number }>(),
        'Get Quiz Items Success': props<{ quizItems: any[] }>(),
        'Get Quiz Items Failure': props<{ errors: BackendErrorsInterface }>(),
        'Navigate To Quiz': props<{ quizId: number }>(),
    },
});
