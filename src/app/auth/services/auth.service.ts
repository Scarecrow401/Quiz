import { map, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from '../types/auth-response.interface';
import { RegisterPayloadInterface } from '../types/register-payload.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public constructor(private readonly http: HttpClient) {}

    public register(payload: RegisterPayloadInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users';

        return this.http
            .post<AuthResponseInterface>(url, payload)
            .pipe(map((response) => response.user));
    }
}
