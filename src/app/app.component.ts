import { Component } from '@angular/core';
import { FullWidthWithNarrowSidebarHeaderComponent } from './ngm-dev-blocks/multi-column/full-width-with-narrow-sidebar-header/full-width-with-narrow-sidebar-header.component';
import { LoginWithEmail02Component } from './ngm-dev-blocks/authentication/login-with-email-02/login-with-email-02.component';
import { LoginEmailPasswordComponent } from './ngm-dev-blocks/free-authentication/login-email-password/login-email-password.component';

@Component({
  selector: 'app-root',
  imports: [
    FullWidthWithNarrowSidebarHeaderComponent,
    LoginEmailPasswordComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ngm-blocks-demo-app';
}
