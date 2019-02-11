import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScssComponent } from './test-scss.component';

describe('TestScssComponent', () => {
  let component: TestScssComponent;
  let fixture: ComponentFixture<TestScssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestScssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
