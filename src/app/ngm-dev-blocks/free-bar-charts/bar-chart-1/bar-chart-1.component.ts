/*
	Installed from http://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-bar-charts/bar-chart-1`
*/

import {
  Component,
  computed,
  DEFAULT_CURRENCY_CODE,
  inject,
  LOCALE_ID,
  signal,
} from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
} from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatSlideToggle } from '@angular/material/slide-toggle';

type GenerateSeriesOptions = {
  length: number;
  min: number;
  max: number;
};

@Component({
  selector: 'ngm-dev-block-bar-chart-1',
  standalone: true,
  imports: [
    BaseChartDirective,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatDivider,
    MatSlideToggle,
    MatCardSubtitle,
  ],
  templateUrl: './bar-chart-1.component.html',
})
export class BarChart1Component {
  readonly title = 'Monthly revenue performance';
  readonly description = 'Snapshot of earnings across the last 12 months.';

  readonly showComparison = signal<boolean>(false);
  private _locale = inject(LOCALE_ID);
  private readonly _defaultCurrencyCode = inject(DEFAULT_CURRENCY_CODE);
  private readonly labels: string[] = [
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
  ];

  private generateSeries(options: GenerateSeriesOptions): number[] {
    const { length, min, max } = options;
    const series: number[] = [];
    for (let i = 0; i < length; i++) {
      const value = Math.floor(min + Math.random() * (max - min));
      series.push(value);
    }
    return series;
  }

  private readonly thisYearData = this.generateSeries({
    length: this.labels.length,
    min: 45000,
    max: 105000,
  });

  private readonly lastYearData = this.generateSeries({
    length: this.labels.length,
    min: 30000,
    max: 90000,
  });

  chartDataLarge = computed(() => {
    const includeComparison = this.showComparison();
    return {
      labels: this.labels,
      datasets: [
        ...(includeComparison
          ? [
              {
                data: this.lastYearData,
                label: 'Previous Year',
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246)',
                borderWidth: 1,
              },
            ]
          : []),
        {
          data: this.thisYearData,
          label: 'Current Year',
          borderColor: 'rgb(139, 92, 246)',
          backgroundColor: 'rgba(139, 92, 246)',
          borderWidth: 1,
        },
      ],
    };
  });

  readonly chartOptionsLarge: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: true },
      },
      y: {
        grid: { display: true, color: '#66666630' },
        ticks: {
          display: true,
          stepSize: 20000,
          callback: (value) =>
            new Intl.NumberFormat(this._locale, {
              style: 'currency',
              currency: this._defaultCurrencyCode,
              maximumFractionDigits: 0,
            }).format((value as number) / 1000) + (value === 0 ? '' : 'K'),
        },
        border: { display: false },
      },
    },
  };

  readonly chartOptionsSmall: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: true },
      },
      y: {
        grid: { display: false },
        ticks: { display: false },
        border: { display: false },
      },
    },
  };
}
