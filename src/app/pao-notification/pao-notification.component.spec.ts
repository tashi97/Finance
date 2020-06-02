import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaoNotificationComponent } from './pao-notification.component';

describe('PaoNotificationComponent', () => {
  let component: PaoNotificationComponent;
  let fixture: ComponentFixture<PaoNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaoNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaoNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
