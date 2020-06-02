import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcoRegisterationComponent } from './rco-registeration.component';

describe('RcoRegisterationComponent', () => {
  let component: RcoRegisterationComponent;
  let fixture: ComponentFixture<RcoRegisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcoRegisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcoRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
