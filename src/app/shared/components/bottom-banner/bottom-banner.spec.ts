import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBanner } from './bottom-banner';

describe('BottomBanner', () => {
  let component: BottomBanner;
  let fixture: ComponentFixture<BottomBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
