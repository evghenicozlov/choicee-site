import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Container } from '@shared/components/container/container';
import { ShimmerTopBanner } from '@shared/components/shimmer-top-banner/shimmer-top-banner';
import { TextBlock } from '@shared/components/text-block/text-block';

@Component({
  selector: 'app-privacy-policy-page',
  imports: [Container, TextBlock, ShimmerTopBanner],
  templateUrl: './privacy-policy-page.html',
  styleUrl: './privacy-policy-page.scss',
})
export class PrivacyPolicyPage implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit() {
    this.title.setTitle('Privacy Policy | Choicee');
    this.meta.updateTag({
      name: 'description',
      content: 'Privacy Policy for the Choicee app and website.',
    });
  }
}
