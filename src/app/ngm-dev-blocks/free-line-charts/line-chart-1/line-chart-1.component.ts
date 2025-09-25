/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-line-charts/line-chart-1`
*/

import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { ChartConfiguration, ChartData } from 'chart.js';
import { MatList, MatListItem, MatListItemIcon } from '@angular/material/list';
import { DecimalPipe } from '@angular/common';

type SummaryItem = {
  name: string;
  value: number;
  color: string;
};

@Component({
  selector: 'ngm-dev-block-line-chart-1',
  templateUrl: './line-chart-1.component.html',
  imports: [
    BaseChartDirective,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatList,
    MatListItem,
    MatListItemIcon,
    DecimalPipe,
  ],
})
export class LineChart1Component {
  chartType = 'line' as const;

  chartData: ChartData<'line', number[], string> = {
    labels: [
      'Jan 24',
      'Feb 24',
      'Mar 24',
      'Apr 24',
      'May 24',
      'Jun 24',
      'Jul 24',
      'Aug 24',
      'Sep 24',
      'Oct 24',
      'Nov 24',
      'Dec 24',
    ],
    datasets: [
      {
        data: [312, 278, 345, 134, 389, 267, 423, 398, 456, 289, 423, 367],
        label: 'Direct',
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgb(59, 130, 246)',
        pointHoverBackgroundColor: 'rgb(59, 130, 246)',
        pointHoverBorderColor: 'rgb(59, 130, 246)',
        fill: false,
        tension: 0.4,
      },
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 156, 0, 0, 0],
        label: 'Referral',
        borderColor: 'rgb(139, 92, 246)',
        backgroundColor: 'rgb(139, 92, 246)',
        pointHoverBackgroundColor: 'rgb(139, 92, 246)',
        pointHoverBorderColor: 'rgb(139, 92, 246)',
        fill: false,
        tension: 0.4,
      },
      {
        data: [67, 78, 89, 45, 92, 83, 76, 98, 234, 112, 67, 123],
        label: 'Social',
        borderColor: 'rgb(236, 72, 153)',
        backgroundColor: 'rgb(236, 72, 153)',
        pointHoverBackgroundColor: 'rgb(236, 72, 153)',
        pointHoverBorderColor: 'rgb(236, 72, 153)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          align: 'inner',
          maxTicksLimit: 2,
          callback: (_tickValue, index, ticks) => {
            if (index === 0 || index === ticks.length - 1) {
              return this.chartData.labels?.[index] ?? '';
            }
            return;
          },
        },
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 4,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  summary: SummaryItem[] = [
    {
      name: 'Direct',
      value: 3689,
      color: 'rgb(59, 130, 246)',
    },
    {
      name: 'Referral',
      value: 156,
      color: 'rgb(139, 92, 246)',
    },
    {
      name: 'Social',
      value: 1067,
      color: 'rgb(236, 72, 153)',
    },
  ];
}
