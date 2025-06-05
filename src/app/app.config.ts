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
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'scheduler-app-a1fa3',
        appId: '1:810517199160:web:9485292e310f983dc329cd',
        storageBucket: 'scheduler-app-a1fa3.firebasestorage.app',
        apiKey: 'AIzaSyCe7JA6YQxdCg1fHatENQUWI7JPrrYlBX8',
        authDomain: 'scheduler-app-a1fa3.firebaseapp.com',
        messagingSenderId: '810517199160',
        measurementId: 'G-ZKJSWGF14R',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideAnimationsAsync(),
  ],
};
