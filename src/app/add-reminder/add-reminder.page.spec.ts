import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReminderPage } from './add-reminder.page';

describe('AddReminderPage', () => {
  let component: AddReminderPage;
  let fixture: ComponentFixture<AddReminderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReminderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReminderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
