import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Container } from '@shared/components/container/container';
import { ShimmerTopBanner } from '@shared/components/shimmer-top-banner/shimmer-top-banner';
import { TextBlock } from '@shared/components/text-block/text-block';

@Component({
  selector: 'app-support-page',
  imports: [Container, TextBlock, ShimmerTopBanner],
  templateUrl: './support-page.html',
  styleUrl: './support-page.scss',
})
export class SupportPage implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit() {
    this.title.setTitle('Support | Choicee');
    this.meta.updateTag({
      name: 'description',
      content:
        'Get help with the Choicee app: contact support and find answers to common questions.',
    });
  }
}
