import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducers';

import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { BackendErrorMessagesComponent } from 'src/app/shared/types/components/backend-error-messages/backend-error-messages.component';
import { authActions } from '../../store/actions';
import { RegisterPayloadInterface } from '../../types/register-payload.interface';

@Component({
    selector: 'qz-register',
    templateUrl: './register.component.html',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        RouterLink,
        AsyncPipe,
        NgIf,
        BackendErrorMessagesComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
    public form = this.fb.nonNullable.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
    });

    public data$ = combineLatest({
        isSubmitting: this.store.select(selectIsSubmitting),
        backendErrors: this.store.select(selectValidationErrors),
    });

    public constructor(private readonly fb: FormBuilder, private readonly store: Store) {}

    public submitForm(): void {
        const payload: RegisterPayloadInterface = {
            user: this.form.getRawValue(),
        };
        this.store.dispatch(authActions.registerInit({ payload }));
    }
}
