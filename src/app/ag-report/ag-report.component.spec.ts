import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgReportComponent } from './ag-report.component';

describe('AgReportComponent', () => {
  let component: AgReportComponent;
  let fixture: ComponentFixture<AgReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
