import { Component } from '@angular/core';

import { AnswerByThemeCardsComponent } from './components/answer-by-theme-cards/answer-by-theme-cards.component';

@Component({
  selector: 'app-answer-by-theme',
  standalone: true,
  imports: [AnswerByThemeCardsComponent],
  templateUrl: './answer-by-theme.component.html',
  styleUrl: './answer-by-theme.component.scss'
})
export class AnswerByThemeComponent {

}
