import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillinggapsComponent } from './fillinggaps.component';

describe('FillinggapsComponent', () => {
  let component: FillinggapsComponent;
  let fixture: ComponentFixture<FillinggapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillinggapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillinggapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
