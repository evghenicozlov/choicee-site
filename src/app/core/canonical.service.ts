import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CanonicalService {
  private doc = inject(DOCUMENT);
  private router = inject(Router);

  init() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.update());
  }

  private update() {
    let path = this.router.url.split(/[?#]/)[0].replace(/index\.html$/, '');
    if (!path.endsWith('/')) path += '/';

    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = 'canonical';
      this.doc.head.appendChild(link);
    }
    link.href = 'https://choicee.org' + path;
  }
}
