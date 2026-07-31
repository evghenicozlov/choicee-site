import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { ShimmerView } from '../shimmer-view/shimmer-view';
import { Star } from '../star/star';
import { StarParams } from '../star/star-params';

@Component({
  selector: 'app-shimmer-top-banner',
  imports: [NgTemplateOutlet, ShimmerView, Star, JsonPipe],
  templateUrl: './shimmer-top-banner.html',
  styleUrl: './shimmer-top-banner.scss',
})
export class ShimmerTopBanner {
  title = input<string>();
  stars: StarParams[] = this.generateStars(10);

  generateStars(count: number): StarParams[] {
    const columns = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / columns);

    return Array.from({ length: count }, (_, index) => {
      const col = index % columns;
      const row = Math.floor(index / columns);
      return {
        left: ((col + 0.5) / columns) * 100 + (Math.random() - 0.5) * 10,
        top: ((row + 0.5) / rows) * 100 + (Math.random() - 0.5) * 10,
        size: 10.0 + Math.random() * 5.0, // 10.0–15.0
        opacity: Math.random(),
        delay: -(Math.random() * 5), // 0–5 c
        duration: 4.0 + Math.random() * 4.0, // 4–8 c
      };
    });
  }
}
