/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-lists/onboarding-feed-1`
*/

import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Step {
  id: number;
  type: 'done' | 'in progress' | 'open';
  title: string;
  description: string;
  href: string;
}

@Component({
  selector: 'ngm-dev-block-onboarding-feed-1',
  templateUrl: './onboarding-feed-1.component.html',
  imports: [MatIconModule, MatButtonModule],
})
export class OnboardingFeed1Component {
  userName = 'Sofia';

  steps: Step[] = [
    {
      id: 1,
      type: 'done',
      title: 'Complete account verification',
      description:
        'Verify your identity using your corporate email and set up two-factor authentication for enhanced security.',
      href: '#',
    },
    {
      id: 2,
      type: 'in progress',
      title: 'Configure data source',
      description:
        'Choose from over 30 integration options to connect your existing data sources and start analyzing your data.',
      href: '#',
    },
    {
      id: 3,
      type: 'open',
      title: 'Design your dashboard',
      description:
        'Use our intuitive drag-and-drop interface to create custom visualizations and interactive dashboards.',
      href: '#',
    },
  ];
}
