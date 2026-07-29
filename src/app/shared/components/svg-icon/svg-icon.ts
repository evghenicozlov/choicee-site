import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  imports: [],
  template: '<svg:use [attr.href]="href()" />',
})
export class SvgIcon {
  icon = input.required<string>();

  readonly href = computed(() => `assets/svg/${this.icon()}.svg#${this.icon()}`);
}
