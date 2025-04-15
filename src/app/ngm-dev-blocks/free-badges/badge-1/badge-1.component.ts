/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-badges/badge-1`
*/

import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatChipSet, MatChip, MatChipAvatar } from '@angular/material/chips';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ngm-dev-block-badge-1',
  templateUrl: './badge-1.component.html',
  imports: [MatIconModule, MatChipSet, MatChip, MatChipAvatar, NgClass],
  styleUrls: ['./badge-1.component.scss'],
})
export class Badge1Component {
  badges = [
    {
      value: '9.3%',
      trend: 'up',
      classes: 'text-emerald-700 dark:text-emerald-500',
    },
    { value: '1.9%', trend: 'down', classes: 'text-red-700 dark:text-red-500' },
    {
      value: '0.6%',
      trend: 'right',
      classes: 'text-gray-700 dark:text-gray-400',
    },
  ];

  getTrendIcon(trend: string): string {
    switch (trend) {
      case 'up':
        return 'arrow_upward';
      case 'down':
        return 'arrow_downward';
      default:
        return 'arrow_forward';
    }
  }
}
