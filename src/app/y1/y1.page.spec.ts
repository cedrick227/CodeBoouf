import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y1Page } from './y1.page';

describe('Y1Page', () => {
  let component: Y1Page;
  let fixture: ComponentFixture<Y1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
