import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarChart } from './radar-chart';

describe('RadarChart', () => {
  let component: RadarChart;
  let fixture: ComponentFixture<RadarChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadarChart],
    }).compileComponents();

    fixture = TestBed.createComponent(RadarChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
