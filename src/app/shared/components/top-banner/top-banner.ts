import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-top-banner',
  imports: [NgOptimizedImage],
  templateUrl: './top-banner.html',
  styleUrl: './top-banner.scss',
})
export class TopBanner {
  title = input<string>();
}
