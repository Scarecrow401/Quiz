import { createActionGroup, props } from '@ngrx/store';

import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { RegisterPayloadInterface } from '../types/register-payload.interface';

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        'Register Init': props<{ payload: RegisterPayloadInterface }>(),
        'Register Success': props<{ currentUser: CurrentUserInterface }>(),
        'Register Failure': props<{ errors: BackendErrorsInterface }>(),
    },
});
