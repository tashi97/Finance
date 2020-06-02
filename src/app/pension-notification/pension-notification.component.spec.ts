import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionNotificationComponent } from './pension-notification.component';

describe('PensionNotificationComponent', () => {
  let component: PensionNotificationComponent;
  let fixture: ComponentFixture<PensionNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
