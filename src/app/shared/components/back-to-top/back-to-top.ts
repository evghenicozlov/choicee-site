import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, throttleTime } from 'rxjs';
import { SvgIcon } from '../svg-icon/svg-icon';

@Component({
  selector: 'app-back-to-top',
  imports: [SvgIcon],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss',
})
export class BackToTop {
  private readonly destroyRef = inject(DestroyRef);
  private readonly threshold = 400;

  protected readonly isVisible = signal<boolean>(false);

  constructor() {
    afterNextRender(() => {
      fromEvent(window, 'scroll', { passive: false })
        .pipe(throttleTime(100), takeUntilDestroyed(this.destroyRef))
        .subscribe(() => this.checkVisibility());
    });
  }

  protected handleClick() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }

  private checkVisibility() {
    const scrolled = window.scrollY > this.threshold;
    if (scrolled !== this.isVisible()) {
      this.isVisible.set(scrolled);
    }
  }
}
