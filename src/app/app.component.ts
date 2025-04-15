import { Component } from '@angular/core';
import { Dialog1Component } from "./ngm-dev-blocks/free-dialogs/dialog-1/dialog-1.component";
import { LoginEmailPasswordComponent } from "./ngm-dev-blocks/free-authentication/login-email-password/login-email-password.component";
import { OnboardingFeed1Component } from "./ngm-dev-blocks/free-lists/onboarding-feed-1/onboarding-feed-1.component";
import { SimpleWithIconsComponent } from "./ngm-dev-blocks/free-lists/simple-with-icons/simple-with-icons.component";
import { Badge1Component } from "./ngm-dev-blocks/free-badges/badge-1/badge-1.component";
import { GridList1Component } from './ngm-dev-blocks/free-grid-lists/grid-list-1/grid-list-1.component';

@Component({
  selector: 'app-root',
  imports: [Dialog1Component, LoginEmailPasswordComponent, OnboardingFeed1Component, SimpleWithIconsComponent, Badge1Component, GridList1Component],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ngm-blocks-demo-app';
}
