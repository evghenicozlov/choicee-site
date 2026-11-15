import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { CanonicalService } from '@core/canonical.service';
import { AppTitleStrategy } from '@core/strategies/app-title-strategy';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: TitleStrategy,
      useClass: AppTitleStrategy,
    },
    provideAppInitializer(() => inject(CanonicalService).init()),
  ],
};
