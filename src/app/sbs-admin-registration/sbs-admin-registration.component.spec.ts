import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsAdminRegistrationComponent } from './sbs-admin-registration.component';

describe('SbsAdminRegistrationComponent', () => {
  let component: SbsAdminRegistrationComponent;
  let fixture: ComponentFixture<SbsAdminRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsAdminRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsAdminRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
