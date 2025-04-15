/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-lists/simple-with-icons`
*/

import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';

interface TimelineItem {
  id: string;
  type: 'applied' | 'advanced' | 'completed';
  title: string;
  subtitle: string;
  date: string;
  icon: string;
  person?: string;
}

@Component({
  selector: 'ngm-dev-block-simple-with-icons',
  templateUrl: './simple-with-icons.component.html',

  imports: [MatIconModule, NgClass],
})
export class SimpleWithIconsComponent {
  items: TimelineItem[] = [
    {
      id: '1',
      type: 'applied',
      title: 'Applied to',
      subtitle: 'Senior UX Designer',
      date: 'Nov 15',
      icon: 'person',
      person: 'Emma Rodriguez',
    },
    {
      id: '2',
      type: 'advanced',
      title: 'Advanced to technical assessment',
      subtitle: '',
      date: 'Nov 18',
      icon: 'thumb_up',
      person: 'Michael Chang',
    },
    {
      id: '3',
      type: 'completed',
      title: 'Completed technical assessment',
      subtitle: '',
      date: 'Nov 22',
      icon: 'check',
      person: 'Sophie Anderson',
    },
    {
      id: '4',
      type: 'advanced',
      title: 'Advanced to final interview',
      subtitle: '',
      date: 'Nov 25',
      icon: 'thumb_up',
      person: 'Michael Chang',
    },
    {
      id: '5',
      type: 'completed',
      title: 'Completed final interview',
      subtitle: '',
      date: 'Nov 30',
      icon: 'check',
      person: 'James Wilson',
    },
  ];
}
