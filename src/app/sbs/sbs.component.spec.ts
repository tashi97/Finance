import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsComponent } from './sbs.component';

describe('SbsComponent', () => {
  let component: SbsComponent;
  let fixture: ComponentFixture<SbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
