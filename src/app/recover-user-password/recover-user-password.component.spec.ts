import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverUserPasswordComponent } from './recover-user-password.component';

describe('RecoverUserPasswordComponent', () => {
  let component: RecoverUserPasswordComponent;
  let fixture: ComponentFixture<RecoverUserPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverUserPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverUserPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
