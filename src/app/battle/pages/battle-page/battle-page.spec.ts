import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlePage } from './battle-page';

describe('BattlePage', () => {
  let component: BattlePage;
  let fixture: ComponentFixture<BattlePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattlePage],
    }).compileComponents();

    fixture = TestBed.createComponent(BattlePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
