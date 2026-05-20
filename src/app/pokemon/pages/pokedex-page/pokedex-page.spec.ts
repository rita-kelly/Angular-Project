import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexPage } from './pokedex-page';

describe('PokedexPage', () => {
  let component: PokedexPage;
  let fixture: ComponentFixture<PokedexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PokedexPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
