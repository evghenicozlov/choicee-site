import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Container } from '@shared/components/container/container';
import { ShimmerTopBanner } from '@shared/components/shimmer-top-banner/shimmer-top-banner';
import { TextBlock } from '@shared/components/text-block/text-block';

@Component({
  selector: 'app-terms-of-use-page',
  imports: [Container, TextBlock, ShimmerTopBanner],
  templateUrl: './terms-of-use-page.html',
  styleUrl: './terms-of-use-page.scss',
})
export class TermsOfUsePage implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit() {
    this.title.setTitle('Terms of Use | Choicee');
    this.meta.updateTag({
      name: 'description',
      content: 'Terms of Use for the Choicee app and website.',
    });
  }
}
