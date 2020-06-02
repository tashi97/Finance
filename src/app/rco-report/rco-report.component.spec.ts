import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcoReportComponent } from './rco-report.component';

describe('RcoReportComponent', () => {
  let component: RcoReportComponent;
  let fixture: ComponentFixture<RcoReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcoReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
