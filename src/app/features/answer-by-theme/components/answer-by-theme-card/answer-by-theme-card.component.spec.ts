import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerByThemeCardComponent } from './answer-by-theme-card.component';

describe('AnswerByThemeCardComponent', () => {
  let component: AnswerByThemeCardComponent;
  let fixture: ComponentFixture<AnswerByThemeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerByThemeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswerByThemeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
