import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroQuestionComponent } from './intro-question.component';

describe('IntroQuestionComponent', () => {
  let component: IntroQuestionComponent;
  let fixture: ComponentFixture<IntroQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
