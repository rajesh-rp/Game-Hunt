import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeMatchesComponent } from './free-matches.component';

describe('FreeMatchesComponent', () => {
  let component: FreeMatchesComponent;
  let fixture: ComponentFixture<FreeMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
