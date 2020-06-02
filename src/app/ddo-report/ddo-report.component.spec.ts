import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoReportComponent } from './ddo-report.component';

describe('DdoReportComponent', () => {
  let component: DdoReportComponent;
  let fixture: ComponentFixture<DdoReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
