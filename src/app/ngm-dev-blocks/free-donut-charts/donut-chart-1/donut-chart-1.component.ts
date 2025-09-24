/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-donut-charts/donut-chart-1`
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
import {
  MatList,
  MatListItem,
  MatListItemIcon,
  MatDivider,
} from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';

type ExpenseItem = {
  name: string;
  amount: number;
  share: string;
  color: string;
};

@Component({
  selector: 'ngm-dev-block-donut-chart-1',
  templateUrl: './donut-chart-1.component.html',
  imports: [
    BaseChartDirective,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatList,
    MatListItem,
    MatListItemIcon,
    CurrencyPipe,
    MatListItemIcon,
    MatDivider,
  ],
})
export class DonutChart1Component {
  chartType = 'doughnut' as const;

  data: ExpenseItem[] = [
    {
      name: 'Marketing',
      amount: 8450,
      share: '35.2%',
      color: '#06b6d4',
    },
    {
      name: 'Operations',
      amount: 6320,
      share: '26.3%',
      color: '#3b82f6',
    },
    {
      name: 'Research',
      amount: 4890,
      share: '20.4%',
      color: '#6366f1',
    },
    {
      name: 'Human Resources',
      amount: 2940,
      share: '12.2%',
      color: '#8b5cf6',
    },
    {
      name: 'Administration',
      amount: 1380,
      share: '5.9%',
      color: '#d946ef',
    },
  ];

  chartData: ChartData<'doughnut', number[], string> = {
    labels: this.data.map((item) => item.name),
    datasets: [
      {
        data: this.data.map((item) => item.amount),
        backgroundColor: this.data.map((item) => item.color),
        borderWidth: 0,
      },
    ],
  };

  chartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '60%',
  };
}
