import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyEasyHomePage } from './notify-easy-home.page';

describe('NotifyEasyHomePage', () => {
  let component: NotifyEasyHomePage;
  let fixture: ComponentFixture<NotifyEasyHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyEasyHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyEasyHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
