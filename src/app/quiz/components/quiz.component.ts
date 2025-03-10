import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-quiz',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent {}
