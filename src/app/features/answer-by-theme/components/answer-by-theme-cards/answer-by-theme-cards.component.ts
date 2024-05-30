import { Component } from '@angular/core';

import { AnswerByThemeCardComponent } from '../answer-by-theme-card/answer-by-theme-card.component';

@Component({
  selector: 'app-answer-by-theme-cards',
  standalone: true,
  imports: [AnswerByThemeCardComponent],
  templateUrl: './answer-by-theme-cards.component.html',
  styleUrl: './answer-by-theme-cards.component.scss'
})
export class AnswerByThemeCardsComponent {

}
