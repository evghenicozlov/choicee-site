import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerTopBanner } from './shimmer-top-banner';

describe('ShimmerTopBanner', () => {
  let component: ShimmerTopBanner;
  let fixture: ComponentFixture<ShimmerTopBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShimmerTopBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(ShimmerTopBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
