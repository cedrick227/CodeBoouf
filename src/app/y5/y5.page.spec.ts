import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y5Page } from './y5.page';

describe('Y5Page', () => {
  let component: Y5Page;
  let fixture: ComponentFixture<Y5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
