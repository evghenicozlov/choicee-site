import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerView } from './shimmer-view';

describe('ShimmerView', () => {
  let component: ShimmerView;
  let fixture: ComponentFixture<ShimmerView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShimmerView],
    }).compileComponents();

    fixture = TestBed.createComponent(ShimmerView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
