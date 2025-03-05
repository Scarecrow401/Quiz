import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizItemsComponent } from './quiz-items.component';

describe('QuizItemsComponent', () => {
  let component: QuizItemsComponent;
  let fixture: ComponentFixture<QuizItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ QuizItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
