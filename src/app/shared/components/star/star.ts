import { JsonPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { StarParams } from './star-params';

@Component({
  selector: 'app-star',
  imports: [JsonPipe],
  templateUrl: './star.html',
  styleUrl: './star.scss',
  host: {
    '[style.left.%]': 'params().left',
    '[style.top.%]': 'params().top',
    '[style.width.px]': 'params().size',
    '[style.height.px]': 'params().size',
    '[style.animation-delay.s]': 'params().delay',
    '[style.animation-duration.s]': 'params().duration',
  },
})
export class Star {
  params = input.required<StarParams>();
}
