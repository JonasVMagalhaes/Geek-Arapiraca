import { Component } from '@angular/core';

import { CubeComponent } from '@src/app/shared/components/cube/cube.component';
import { CubeColorsManager } from '@src/app/shared/components/cube/managers/cube-colors-manager';
import { CubeManager } from '@src/app/shared/components/cube/managers/cube-manager';

@Component({
  selector: 'app-answer-by-theme-card',
  standalone: true,
  imports: [CubeComponent],
  templateUrl: './answer-by-theme-card.component.html',
  styleUrl: './answer-by-theme-card.component.scss'
})
export class AnswerByThemeCardComponent {
  cardManager = new CubeManager({
    colors: new CubeColorsManager({
      front: 'green',
      back: 'blue',
      left: 'red',
      right: 'black',
      top: 'yellow',
      bottom: 'pink'
    })
  });
}
