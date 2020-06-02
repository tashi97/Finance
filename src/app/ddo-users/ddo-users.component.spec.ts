import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoUsersComponent } from './ddo-users.component';

describe('DdoUsersComponent', () => {
  let component: DdoUsersComponent;
  let fixture: ComponentFixture<DdoUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
