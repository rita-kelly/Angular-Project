import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleHistory } from './battle-history';

describe('BattleHistory', () => {
  let component: BattleHistory;
  let fixture: ComponentFixture<BattleHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattleHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(BattleHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
