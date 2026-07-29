import { Component } from '@angular/core';
import { Container } from '@shared/components/container/container';
import { TextBlock } from '@shared/components/text-block/text-block';
import { TopBanner } from '@shared/components/top-banner/top-banner';

@Component({
  selector: 'app-privacy-policy-page',
  imports: [TopBanner, Container, TextBlock],
  templateUrl: './privacy-policy-page.html',
  styleUrl: './privacy-policy-page.scss',
})
export class PrivacyPolicyPage {}
