import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsadminComponent } from './sbsadmin.component';

describe('SbsadminComponent', () => {
  let component: SbsadminComponent;
  let fixture: ComponentFixture<SbsadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
