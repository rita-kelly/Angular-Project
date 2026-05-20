import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearch } from './pokemon-search';

describe('PokemonSearch', () => {
  let component: PokemonSearch;
  let fixture: ComponentFixture<PokemonSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
