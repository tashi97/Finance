import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoRegisterationComponent } from './ddo-registeration.component';

describe('DdoRegisterationComponent', () => {
  let component: DdoRegisterationComponent;
  let fixture: ComponentFixture<DdoRegisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoRegisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
