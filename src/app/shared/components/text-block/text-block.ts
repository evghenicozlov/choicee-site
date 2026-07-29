import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-block',
  imports: [],
  templateUrl: './text-block.html',
  styleUrl: './text-block.scss',
})
export class TextBlock {
  subtitle = input<string>();
}
