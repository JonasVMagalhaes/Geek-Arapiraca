import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerByThemeCardsComponent } from './answer-by-theme-cards.component';

describe('AnswerByThemeCardsComponent', () => {
  let component: AnswerByThemeCardsComponent;
  let fixture: ComponentFixture<AnswerByThemeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerByThemeCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswerByThemeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
