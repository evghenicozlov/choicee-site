import { Component } from '@angular/core';
import { Container } from '@shared/components/container/container';
import { PreviewList } from '@shared/components/preview-list/preview-list';
import { ShimmerTopBanner } from '@shared/components/shimmer-top-banner/shimmer-top-banner';
import { TextBlock } from '@shared/components/text-block/text-block';
import { TopBanner } from '@shared/components/top-banner/top-banner';

@Component({
  selector: 'app-main-page',
  imports: [TopBanner, PreviewList, TextBlock, Container, ShimmerTopBanner],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  readonly previews = [
    'assets/images/previews/preview-en-iphone-1.jpg',
    'assets/images/previews/preview-en-iphone-2.jpg',
    'assets/images/previews/preview-en-iphone-3.jpg',
    'assets/images/previews/preview-en-iphone-4.jpg',
    'assets/images/previews/preview-en-iphone-5.jpg',
    'assets/images/previews/preview-en-iphone-6.jpg',
    'assets/images/previews/preview-en-iphone-7.jpg',
  ];
}
