import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GazatteComponent } from './gazatte.component';

describe('GazatteComponent', () => {
  let component: GazatteComponent;
  let fixture: ComponentFixture<GazatteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GazatteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GazatteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
