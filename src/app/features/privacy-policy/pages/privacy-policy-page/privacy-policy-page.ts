import { Component } from '@angular/core';
import { Container } from '@shared/components/container/container';
import { ShimmerTopBanner } from '@shared/components/shimmer-top-banner/shimmer-top-banner';
import { TextBlock } from '@shared/components/text-block/text-block';
import { TopBanner } from '@shared/components/top-banner/top-banner';

@Component({
  selector: 'app-privacy-policy-page',
  imports: [TopBanner, Container, TextBlock, ShimmerTopBanner],
  templateUrl: './privacy-policy-page.html',
  styleUrl: './privacy-policy-page.scss',
})
export class PrivacyPolicyPage {}
