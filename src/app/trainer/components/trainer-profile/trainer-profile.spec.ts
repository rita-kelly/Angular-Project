import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerProfile } from './trainer-profile';

describe('TrainerProfile', () => {
  let component: TrainerProfile;
  let fixture: ComponentFixture<TrainerProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
