import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y3Page } from './y3.page';

describe('Y3Page', () => {
  let component: Y3Page;
  let fixture: ComponentFixture<Y3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
