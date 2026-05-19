import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([], withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })),
  ],
};
