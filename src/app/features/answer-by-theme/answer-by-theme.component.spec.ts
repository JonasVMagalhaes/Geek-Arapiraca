import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerByThemeComponent } from './answer-by-theme.component';

describe('AnswerByThemeComponent', () => {
  let component: AnswerByThemeComponent;
  let fixture: ComponentFixture<AnswerByThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerByThemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswerByThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
