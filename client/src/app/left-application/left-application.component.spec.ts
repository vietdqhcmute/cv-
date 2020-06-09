import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftApplicationComponent } from './left-application.component';

describe('LeftApplicationComponent', () => {
  let component: LeftApplicationComponent;
  let fixture: ComponentFixture<LeftApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
