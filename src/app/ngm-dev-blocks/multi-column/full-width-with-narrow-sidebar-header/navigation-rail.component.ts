/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update multi-column/full-width-with-narrow-sidebar-header`
*/

import { Component, model } from '@angular/core';
import { classNames } from '../../utils/functions';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
@Component({
  selector:
    'ngm-dev-block-paid-application-multi-column-full-width-with-narrow-sidebar-header-navigation-rail',
  templateUrl: './navigation-rail.component.html',
  styleUrls: ['./navigation-rail.component.scss'],
  imports: [MatIconModule, RouterLink],
})
export class FullWidthWithNarrowSidebarHeaderNavigationRailComponent {
  menuItems =
    model.required<
      {
        id: string;
        label: string;
        icon: string;
        routerLink: string;
        isActive?: boolean;
      }[]
    >();

  readonly classNames = classNames;

  makeActive(id: string) {
    this.menuItems.update((items) =>
      items.map((item) => ({
        ...item,
        isActive: item.id === id,
      }))
    );
  }
}
