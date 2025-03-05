import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { selectIsLoading, selectQuizItems } from '../../store/reducers';

import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { quizItemsActions } from '../../store/actions';

@Component({
    selector: 'app-quiz-items',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './quiz-items.component.html',
    styleUrls: ['./quiz-items.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizItemsComponent implements OnInit {
    public data$ = combineLatest({
        isLoading: this.store.select(selectIsLoading),
        quizItems: this.store.select(selectQuizItems),
    });

    public constructor(private readonly store: Store) {}

    public ngOnInit(): void {
        this.store.dispatch(quizItemsActions.getQuizItems({ userId: 1 }));
    }

    public navigateToQuiz(quizId: number): void {
        this.store.dispatch(quizItemsActions.navigateToQuiz({ quizId }));
    }
}
