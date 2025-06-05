import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page.component'),
  },
  {
    path: 'user',
    loadComponent: () =>
      import(
        './ngm-dev-blocks/free-authentication/login-email-password/login-email-password.component'
      ),
  },
];
