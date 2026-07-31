import { Component } from '@angular/core';
import { Container } from '@shared/components/container/container';
import { ShimmerTopBanner } from '@shared/components/shimmer-top-banner/shimmer-top-banner';
import { TextBlock } from '@shared/components/text-block/text-block';
import { TopBanner } from '@shared/components/top-banner/top-banner';

@Component({
  selector: 'app-terms-of-use-page',
  imports: [TopBanner, Container, TextBlock, ShimmerTopBanner],
  templateUrl: './terms-of-use-page.html',
  styleUrl: './terms-of-use-page.scss',
})
export class TermsOfUsePage {}
