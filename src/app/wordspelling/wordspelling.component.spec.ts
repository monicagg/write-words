import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordspellingComponent } from './wordspelling.component';

describe('WordspellingComponent', () => {
  let component: WordspellingComponent;
  let fixture: ComponentFixture<WordspellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordspellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordspellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
