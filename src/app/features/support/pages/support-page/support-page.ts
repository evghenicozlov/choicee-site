import { Component } from '@angular/core';
import { Container } from '@shared/components/container/container';
import { TextBlock } from '@shared/components/text-block/text-block';
import { TopBanner } from '@shared/components/top-banner/top-banner';

@Component({
  selector: 'app-support-page',
  imports: [TopBanner, Container, TextBlock],
  templateUrl: './support-page.html',
  styleUrl: './support-page.scss',
})
export class SupportPage {}
