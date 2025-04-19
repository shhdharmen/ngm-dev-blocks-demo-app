/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-page-shells/page-shell-1`
*/

import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'ngm-dev-block-content-placeholder',
  template: `
    <div
      class="relative h-full w-full overflow-hidden rounded bg-gray-50 dark:bg-gray-800">
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
export class ContentPlaceholderComponent {
  @Input() patternId = 'pattern-1';
}

type TimeRange = {
  value: string;
  viewValue: string;
};

type Location = {
  value: string;
  viewValue: string;
};

@Component({
  selector: 'ngm-dev-block-page-shell-1',
  templateUrl: './page-shell-1.component.html',
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ContentPlaceholderComponent,
  ],
})
export class PageShell1Component {
  timeRanges: TimeRange[] = [
    { value: '1', viewValue: 'Today' },
    { value: '2', viewValue: 'Last 7 days' },
    { value: '3', viewValue: 'Last 4 weeks' },
    { value: '4', viewValue: 'Last 12 months' },
  ];

  locations: Location[] = [
    { value: '1', viewValue: 'US-West' },
    { value: '2', viewValue: 'US-East' },
    { value: '3', viewValue: 'EU-Central-1' },
  ];

  selectedTimeRange = signal<string>('1');
  selectedLocation = signal<string>('1');
}
