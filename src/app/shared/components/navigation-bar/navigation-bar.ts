import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  input,
  OnDestroy,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { MenuButton } from '../menu-button/menu-button';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterLink, RouterLinkActive, MenuButton],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss',
  host: {
    '[style.top.px]': 'topOffset()',
  },
})
export class NavigationBar implements AfterViewInit, OnDestroy {
  routes = input<Routes>();

  @ViewChild('container')
  container?: ElementRef<HTMLDivElement>;

  @ViewChild('navList')
  navList?: ElementRef<HTMLUListElement>;

  @ViewChild('mobileList')
  mobileList?: ElementRef<HTMLUListElement>;

  protected readonly isOverflow = signal<boolean>(false);
  protected readonly mobileListHeight = signal<number>(0);
  protected readonly animate = signal<boolean>(false);
  protected readonly menuOpen = signal<boolean>(false);

  protected readonly topOffset = computed(() => (this.isOverflow() ? 10 : 20));

  private resizeObserver?: ResizeObserver;

  ngAfterViewInit() {
    this.checkOverflow();

    this.resizeObserver = new ResizeObserver(() => {
      this.checkOverflow();
    });

    if (this.container) {
      this.resizeObserver?.observe(this.container?.nativeElement);
    }

    requestAnimationFrame(() => {
      this.animate.set(true);
    });
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  protected handleMenuClick() {
    this.menuOpen.update((value) => !value);
  }

  private checkOverflow = () => {
    if (this.navList && this.container) {
      const scrollWidth = this.navList?.nativeElement.scrollWidth;
      const clientWidth = this.container?.nativeElement.clientWidth;
      const wasOverflow = this.isOverflow();

      if (!wasOverflow && scrollWidth > clientWidth) {
        this.isOverflow.set(true);
      } else if (wasOverflow && scrollWidth < clientWidth - 60) {
        this.isOverflow.set(false);
      }

      if (this.mobileList) {
        this.mobileListHeight.set(this.mobileList.nativeElement.clientHeight);
      }
    }
  };
}
