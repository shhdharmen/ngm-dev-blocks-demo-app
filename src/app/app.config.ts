import { MAT_ICON_DEFAULT_OPTIONS } from '@angular/material/icon';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { environmentVariables } from '../../env';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    {
      provide: MAT_ICON_DEFAULT_OPTIONS,
      useValue: {
        fontSet: 'material-symbols-outlined',
      },
    },
    provideRouter([]),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environmentVariables)),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideAnimationsAsync(),
  ],
};
