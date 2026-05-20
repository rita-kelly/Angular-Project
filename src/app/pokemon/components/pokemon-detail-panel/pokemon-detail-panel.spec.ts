import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailPanel } from './pokemon-detail-panel';

describe('PokemonDetailPanel', () => {
  let component: PokemonDetailPanel;
  let fixture: ComponentFixture<PokemonDetailPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
