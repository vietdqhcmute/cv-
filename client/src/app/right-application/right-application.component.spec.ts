import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightApplicationComponent } from './right-application.component';

describe('RightApplicationComponent', () => {
  let component: RightApplicationComponent;
  let fixture: ComponentFixture<RightApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
