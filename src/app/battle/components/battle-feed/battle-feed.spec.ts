import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleFeed } from './battle-feed';

describe('BattleFeed', () => {
  let component: BattleFeed;
  let fixture: ComponentFixture<BattleFeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattleFeed],
    }).compileComponents();

    fixture = TestBed.createComponent(BattleFeed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
