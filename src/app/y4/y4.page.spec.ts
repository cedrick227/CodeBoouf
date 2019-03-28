import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y4Page } from './y4.page';

describe('Y4Page', () => {
  let component: Y4Page;
  let fixture: ComponentFixture<Y4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
