/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-stacked-layouts/nav-with-page-header`
*/

import { AsyncPipe } from '@angular/common';
import { Component, inject, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DeviceService } from '../../utils/services/device.service';
import { classNames } from '../../utils/functions/class-names';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

type UserNavigationItem = {
  name: string;
  href: string;
};

type User = {
  name: string;
  email: string;
  imageUrl: string;
};

@Component({
  selector: 'ngm-dev-block-content-placeholder-nav-with-page-header',
  template: `
    <div
      class="relative h-96 overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
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
export class ContentPlaceholderNavWithPageHeaderComponent {
  @Input() patternId = 'nav-with-page-header-pattern-1';
}

@Component({
  selector: 'ngm-dev-block-nav-with-page-header',
  templateUrl: './nav-with-page-header.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    AsyncPipe,
    ContentPlaceholderNavWithPageHeaderComponent,
    MatListModule,
    RouterLink,
  ],
})
export class NavWithPageHeaderComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  private deviceService = inject(DeviceService);
  isHandset$ = this.deviceService.isHandset$;

  user: User = {
    name: 'John Doe',
    email: 'john@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  navigation: NavigationItem[] = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
  ];

  userNavigation: UserNavigationItem[] = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ];

  protected classNames = classNames;

  toggleMenu(): void {
    this.drawer.toggle();
  }
}
