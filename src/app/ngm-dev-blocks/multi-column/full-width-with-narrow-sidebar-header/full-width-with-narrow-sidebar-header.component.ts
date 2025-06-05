/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update multi-column/full-width-with-narrow-sidebar-header`
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
import { MatRippleModule } from '@angular/material/core';
import { FullWidthWithNarrowSidebarHeaderNavigationRailComponent } from './navigation-rail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';
type User = {
  name: string;
  email: string;
  imageUrl: string;
};

@Component({
  selector: 'ngm-dev-block-full-width-with-narrow-sidebar-header',
  templateUrl: './full-width-with-narrow-sidebar-header.component.html',
  styleUrls: ['./full-width-with-narrow-sidebar-header.component.scss'],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    MatRippleModule,
    FullWidthWithNarrowSidebarHeaderNavigationRailComponent,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
  ],
})
export class FullWidthWithNarrowSidebarHeaderComponent {
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
}
