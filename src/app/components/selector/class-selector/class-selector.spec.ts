import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSelector } from './class-selector';

describe('ClassSelector', () => {
  let component: ClassSelector;
  let fixture: ComponentFixture<ClassSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
