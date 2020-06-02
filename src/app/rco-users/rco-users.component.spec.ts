import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcoUsersComponent } from './rco-users.component';

describe('RcoUsersComponent', () => {
  let component: RcoUsersComponent;
  let fixture: ComponentFixture<RcoUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcoUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcoUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
