import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { BackToTop } from '@shared/components/back-to-top/back-to-top';
import { BottomBanner } from '@shared/components/bottom-banner/bottom-banner';
import { NavigationBar } from '@shared/components/navigation-bar/navigation-bar';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBar, BottomBanner, BackToTop],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  routes = routes;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Choicee');
  }
}
