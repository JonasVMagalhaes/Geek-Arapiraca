import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-answer-by-theme-card',
  standalone: true,
  imports: [],
  templateUrl: './answer-by-theme-card.component.html',
  styleUrl: './answer-by-theme-card.component.scss'
})
export class AnswerByThemeCardComponent {
  @ViewChild("cube") cube: any;

  teste() {
    this.cube?.nativeElement.classList.add("show-right");
  }

  teste2() {
    this.cube?.nativeElement.classList.add("show-back");
  }
}
