import { Component } from '@angular/core';
import {
  FullWidthWithNarrowSidebarHeaderComponent,
  ContentPlaceholderFullWidthWithNarrowSidebarHeaderComponent,
} from './ngm-dev-blocks/multi-column/full-width-with-narrow-sidebar-header/full-width-with-narrow-sidebar-header.component';

@Component({
  selector: 'app-root',
  imports: [
    FullWidthWithNarrowSidebarHeaderComponent,
    ContentPlaceholderFullWidthWithNarrowSidebarHeaderComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ngm-blocks-demo-app';
}
