import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizItemComponent {

}
