import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteDetailsComponent } from './satellite-details.component';

describe('SatelliteDetailsComponent', () => {
  let component: SatelliteDetailsComponent;
  let fixture: ComponentFixture<SatelliteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatelliteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatelliteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
