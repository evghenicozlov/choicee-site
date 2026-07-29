import { Component } from '@angular/core';
import { Container } from '@shared/components/container/container';
import { TextBlock } from '@shared/components/text-block/text-block';
import { TopBanner } from '@shared/components/top-banner/top-banner';

@Component({
  selector: 'app-terms-of-use-page',
  imports: [TopBanner, Container, TextBlock],
  templateUrl: './terms-of-use-page.html',
  styleUrl: './terms-of-use-page.scss',
})
export class TermsOfUsePage {}
