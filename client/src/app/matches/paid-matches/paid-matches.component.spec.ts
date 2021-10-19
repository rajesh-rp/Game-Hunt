import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidMatchesComponent } from './paid-matches.component';

describe('PaidMatchesComponent', () => {
  let component: PaidMatchesComponent;
  let fixture: ComponentFixture<PaidMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
