import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y6Page } from './y6.page';

describe('Y6Page', () => {
  let component: Y6Page;
  let fixture: ComponentFixture<Y6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
