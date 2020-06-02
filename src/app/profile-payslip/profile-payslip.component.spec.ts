import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePayslipComponent } from './profile-payslip.component';

describe('ProfilePayslipComponent', () => {
  let component: ProfilePayslipComponent;
  let fixture: ComponentFixture<ProfilePayslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePayslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
