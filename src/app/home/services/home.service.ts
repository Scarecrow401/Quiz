import { delay, Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { QuizItemInterface } from '../types/quiz-item.interface';

@Injectable({ providedIn: 'root' })
export class QuizItemsService {
    constructor() {}

    public getQuizItems(userId: number): Observable<QuizItemInterface[]> {
        return of([
            {
                id: 1,
                name: 'Quiz 1',
                info: 'Quiz 1 information',
            },
            {
                id: 2,
                name: 'Quiz 2',
                info: 'Quiz 2 information',
            },
            {
                id: 3,
                name: 'Quiz 3',
                info: 'Quiz 3 information',
            },
        ]).pipe(delay(2000));
    }
}
