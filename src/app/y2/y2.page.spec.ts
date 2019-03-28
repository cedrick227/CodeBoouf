import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y2Page } from './y2.page';

describe('Y2Page', () => {
  let component: Y2Page;
  let fixture: ComponentFixture<Y2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
