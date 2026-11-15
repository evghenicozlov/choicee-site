import { NgOptimizedImage } from '@angular/common';
import {
  afterNextRender,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { SvgIcon } from '../svg-icon/svg-icon';

@Component({
  selector: 'app-preview-list-item',
  imports: [NgOptimizedImage, SvgIcon],
  templateUrl: './preview-list-item.html',
  styleUrl: './preview-list-item.scss',
  host: {
    '[style.borderRadius.px]': 'borderRadius()',
  },
})
export class PreviewListItem {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  readonly src = input.required<string>();

  readonly leftEnable = input<boolean>(false);
  readonly rightEnable = input<boolean>(false);

  readonly leftClick = output<void>();
  readonly rightClick = output<void>();

  readonly currentSrc = signal('');
  readonly nextSrc = signal('');

  readonly transitioning = signal(false);

  readonly borderRadius = signal<number>(0);

  constructor() {
    effect(() => {
      const src = this.src();

      if (!this.currentSrc()) {
        this.currentSrc.set(src);
      } else if (this.currentSrc() !== src) {
        this.nextSrc.set(src);
      }
    });

    // Только в браузере
    afterNextRender(() => {
      this.calculateRadius();

      const observer = new ResizeObserver(() => this.calculateRadius());
      observer.observe(this.elementRef.nativeElement);

      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  handleNextImageLoaded() {
    this.transitioning.set(true);
  }

  handleTransitionEnd() {
    this.currentSrc.set(this.nextSrc());
    this.transitioning.set(false);
  }

  handleLeftClick() {
    this.leftClick.emit();
  }

  handleRightClick() {
    this.rightClick.emit();
  }

  private calculateRadius() {
    this.borderRadius.set(this.elementRef.nativeElement.clientWidth * 0.15);
  }
}
