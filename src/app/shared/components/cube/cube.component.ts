import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

import { CubeManager } from './managers/cube-manager';
import { tap } from 'rxjs';

@Component({
  selector: 'app-cube',
  standalone: true,
  imports: [],
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.scss',
})
export class CubeComponent implements AfterViewInit {
  @Input({ required: true }) manager: CubeManager;

  @ViewChild('cube') cube: ElementRef;

  ngAfterViewInit() {
    this.setRotate();
  }

  private setRotate(): void {
    this.manager?.face.onRotateFront()
      .pipe(tap(() => this.cleanClassesRotate()))
      .subscribe(() => this.cube?.nativeElement.classList.add('show-front'));

    this.manager?.face.onRotateBack()
      .pipe(tap(() => this.cleanClassesRotate()))
      .subscribe(() => this.cube?.nativeElement.classList.add('show-back'));

    this.manager?.face.onRotateLeft()
      .pipe(tap(() => this.cleanClassesRotate()))
      .subscribe(() => this.cube?.nativeElement.classList.add('show-left'));

    this.manager?.face.onRotateRight()
      .pipe(tap(() => this.cleanClassesRotate()))
      .subscribe(() => this.cube?.nativeElement.classList.add('show-right'));

    this.manager?.face.onRotateTop()
      .pipe(tap(() => this.cleanClassesRotate()))
      .subscribe(() => this.cube?.nativeElement.classList.add('show-top'));

    this.manager?.face.onRotateBottom()
      .pipe(tap(() => this.cleanClassesRotate()))
      .subscribe(() => this.cube?.nativeElement.classList.add('show-bottom'));
  }

  private cleanClassesRotate(): void {
    this.cube?.nativeElement.classList.remove('show-front');
    this.cube?.nativeElement.classList.remove('show-back');
    this.cube?.nativeElement.classList.remove('show-left');
    this.cube?.nativeElement.classList.remove('show-right');
    this.cube?.nativeElement.classList.remove('show-top');
    this.cube?.nativeElement.classList.remove('show-bottom');
  }
}
