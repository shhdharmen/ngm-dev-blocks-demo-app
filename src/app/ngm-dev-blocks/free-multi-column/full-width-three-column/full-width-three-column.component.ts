/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-multi-column/full-width-three-column`
*/

import { Component, Input, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { DeviceService } from '../../utils/services/device.service';
import { classNames } from '../../utils/functions';

type User = {
  name: string;
  email: string;
  imageUrl: string;
};

@Component({
  selector: 'ngm-dev-block-content-placeholder-full-width-three-column',
  template: `
    <div
      class="relative h-full overflow-hidden rounded-xl border border-dashed border-gray-400 bg-surface">
      <svg
        class="absolute inset-0 h-full w-full stroke-gray-200 dark:stroke-gray-700"
        fill="none">
        <defs>
          <pattern
            [id]="patternId"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse">
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          [attr.fill]="'url(#' + patternId + ')'"
          width="100%"
          height="100%"></rect>
      </svg>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
})
export class ContentPlaceholderFullWidthThreeColumnComponent {
  @Input() patternId = 'full-width-three-column-pattern-1';
}

@Component({
  selector: 'ngm-dev-block-full-width-three-column',
  templateUrl: './full-width-three-column.component.html',
  styleUrls: ['./full-width-three-column.component.scss'],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    ContentPlaceholderFullWidthThreeColumnComponent,
  ],
})
export class FullWidthThreeColumnComponent {
  readonly classNames = classNames;
  user: User = {
    name: 'John Doe',
    email: 'john@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };
  readonly isLessThanMD$ = inject(DeviceService).isLessThanMD$;
  readonly mainMenu: {
    label: string;
    id: string;
    icon: string;
    isActive?: boolean;
  }[] = [
    {
      label: 'Dashboard',
      id: 'dashboard',
      icon: 'home',
      isActive: true,
    },
    {
      label: 'Team',
      id: 'team',
      icon: 'people',
    },
    {
      label: 'Projects',
      id: 'projects',
      icon: 'folder',
    },
    {
      label: 'Calendar',
      id: 'calendar',
      icon: 'event',
    },
    {
      label: 'Documents',
      id: 'documents',
      icon: 'article',
    },
    {
      label: 'Reports',
      id: 'reports',
      icon: 'bar_chart',
    },
  ];
  readonly teamMenu = [
    {
      label: 'Alpha',
      id: 'alpha',
    },
    {
      label: 'Beta',
      id: 'beta',
    },
    {
      label: 'Gamma',
      id: 'gamma',
    },
  ];
}
