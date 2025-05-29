import { Component } from '@angular/core';
import { Dialog1Component } from "./ngm-dev-blocks/free-dialogs/dialog-1/dialog-1.component";
import { LoginEmailPasswordComponent } from "./ngm-dev-blocks/free-authentication/login-email-password/login-email-password.component";
import { OnboardingFeed1Component } from "./ngm-dev-blocks/free-lists/onboarding-feed-1/onboarding-feed-1.component";
import { SimpleWithIconsComponent } from "./ngm-dev-blocks/free-lists/simple-with-icons/simple-with-icons.component";
import { Badge1Component } from "./ngm-dev-blocks/free-badges/badge-1/badge-1.component";
import { GridList1Component } from './ngm-dev-blocks/free-grid-lists/grid-list-1/grid-list-1.component';
import { PageShell1Component } from './ngm-dev-blocks/free-page-shells/page-shell-1/page-shell-1.component';
import { NavWithPageHeaderComponent } from './ngm-dev-blocks/free-stacked-layouts/nav-with-page-header/nav-with-page-header.component';
import { PageHeading1Component } from "./ngm-dev-blocks/free-page-headings/page-heading-1/page-heading-1.component";
import { FullWidthThreeColumnComponent } from "./ngm-dev-blocks/free-multi-column/full-width-three-column/full-width-three-column.component";

@Component({
  selector: 'app-root',
  imports: [
    Dialog1Component,
    LoginEmailPasswordComponent,
    OnboardingFeed1Component,
    SimpleWithIconsComponent,
    Badge1Component,
    GridList1Component,
    PageShell1Component,
    NavWithPageHeaderComponent,
    PageHeading1Component,
    FullWidthThreeColumnComponent
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ngm-blocks-demo-app';
}
