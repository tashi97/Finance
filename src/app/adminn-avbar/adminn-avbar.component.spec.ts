import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnAvbarComponent } from './adminn-avbar.component';

describe('AdminnAvbarComponent', () => {
  let component: AdminnAvbarComponent;
  let fixture: ComponentFixture<AdminnAvbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnAvbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnAvbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
