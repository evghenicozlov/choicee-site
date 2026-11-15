import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Container } from '@shared/components/container/container';
import { PreviewList } from '@shared/components/preview-list/preview-list';
import { ShimmerTopBanner } from '@shared/components/shimmer-top-banner/shimmer-top-banner';
import { TextBlock } from '@shared/components/text-block/text-block';

@Component({
  selector: 'app-main-page',
  imports: [PreviewList, TextBlock, Container, ShimmerTopBanner],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage implements OnInit {
  readonly previews = [
    'assets/images/previews/preview-en-iphone-1.jpg',
    'assets/images/previews/preview-en-iphone-2.jpg',
    'assets/images/previews/preview-en-iphone-3.jpg',
    'assets/images/previews/preview-en-iphone-4.jpg',
    'assets/images/previews/preview-en-iphone-5.jpg',
    'assets/images/previews/preview-en-iphone-6.jpg',
    'assets/images/previews/preview-en-iphone-7.jpg',
  ];

  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit() {
    this.title.setTitle('Choicee: decision-making tools');
    this.meta.updateTag({
      name: 'description',
      content:
        'Choicee helps you make decisions easily: spin the wheel, flip a coin, roll dice and more. Free app for iOS and Android.',
    });
  }
}
