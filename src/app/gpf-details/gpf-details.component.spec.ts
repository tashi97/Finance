import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpfDetailsComponent } from './gpf-details.component';

describe('GpfDetailsComponent', () => {
  let component: GpfDetailsComponent;
  let fixture: ComponentFixture<GpfDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpfDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
