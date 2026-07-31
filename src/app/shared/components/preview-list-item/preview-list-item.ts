import { NgOptimizedImage } from '@angular/common';
import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  input,
  OnDestroy,
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
    '[style.borderRadius.px]': 'this.borderRadius()',
  },
})
export class PreviewListItem implements AfterViewInit, OnDestroy {
  readonly src = input.required<string>();

  readonly leftEnable = input<boolean>(false);
  readonly rightEnable = input<boolean>(false);

  readonly leftClick = output<void>();
  readonly rightClick = output<void>();

  readonly currentSrc = signal('');
  readonly nextSrc = signal('');

  readonly transitioning = signal(false);

  private resizeObserver?: ResizeObserver;
  readonly borderRadius = signal<number>(0);

  constructor(private elementRef: ElementRef) {
    effect(() => {
      const src = this.src();

      if (!this.currentSrc()) {
        this.currentSrc.set(src);
      } else if (this.currentSrc() !== src) {
        this.nextSrc.set(src);
      }
    });
  }

  ngAfterViewInit(): void {
    this.calculateRadius();
    this.resizeObserver = new ResizeObserver(() => {
      this.calculateRadius();
    });

    this.resizeObserver.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
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

  calculateRadius() {
    if (this.elementRef) {
      this.borderRadius.set(this.elementRef.nativeElement.clientWidth * 0.15);
    }
  }
}
