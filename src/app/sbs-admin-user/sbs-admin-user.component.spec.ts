import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsAdminUserComponent } from './sbs-admin-user.component';

describe('SbsAdminUserComponent', () => {
  let component: SbsAdminUserComponent;
  let fixture: ComponentFixture<SbsAdminUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsAdminUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
