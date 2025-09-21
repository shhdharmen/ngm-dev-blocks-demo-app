/*
	Installed from http://localhost:4000/api/registry/
	Update this file using `@ngm-dev/cli update free-area-charts/area-chart-1`
*/

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { ChartConfiguration, ChartData } from 'chart.js';
import { MatDivider } from '@angular/material/divider';
import { MatList, MatListItem, MatListItemIcon } from '@angular/material/list';
import { DecimalPipe } from '@angular/common';

type SummaryItem = {
  name: string;
  value: number;
  color: string;
};

@Component({
  selector: 'ngm-dev-block-area-chart-1',
  templateUrl: './area-chart-1.component.html',
  imports: [
    BaseChartDirective,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDivider,
    MatList,
    MatListItem,
    MatListItemIcon,
    DecimalPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaChart1Component {
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
        data: [245, 267, 318, 142, 389, 234, 421, 378, 456, 289, 398, 367],
        label: 'Organic',
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointHoverBackgroundColor: 'rgb(59, 130, 246)',
        pointHoverBorderColor: 'rgb(59, 130, 246)',
      },
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 156, 0, 0, 0],
        label: 'Sponsored',
        borderColor: 'rgb(139, 92, 246)',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointHoverBackgroundColor: 'rgb(139, 92, 246)',
        pointHoverBorderColor: 'rgb(139, 92, 246)',
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
          display: true,
          align: 'inner',
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
    layout: {
      padding: {
        left: -8,
      },
    },
  };

  get summary(): SummaryItem[] {
    return this.chartData.datasets.map(dataset => ({
      name: dataset.label ?? '',
      value: dataset.data.reduce((acc, curr) => acc + curr, 0),
      color: dataset.borderColor?.toString() ?? '',
    }));
  }
}
