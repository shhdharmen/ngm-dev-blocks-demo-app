import { MAT_ICON_DEFAULT_OPTIONS } from "@angular/material/icon";
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from "@angular/router";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), {
      provide: MAT_ICON_DEFAULT_OPTIONS,
      useValue: {
        fontSet: 'material-symbols-outlined',
      },
    }, provideRouter([])]
};
