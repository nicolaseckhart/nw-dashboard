import * as React from 'react';
import { Line } from 'react-chartjs-2';
import { Moment } from 'moment';
import { ChartPoint } from 'chart.js';
import { HistoryScope, CardAccent } from '../../shared';

interface Props {
  title: string;
  labels: Array<string | string[] | number | number[] | Date | Date[] | Moment | Moment[]>;
  data: Array<number | null | undefined> | ChartPoint[];
  units: string;
  scope: HistoryScope;
  accent: CardAccent;
  suggestedMin?: number;
  suggestedMax?: number;
}

export const SimpleLineChart: React.FC<Props> = ({ title, labels, data, units, scope, accent }: Props) => {
  const dataset = {
    labels: labels,
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        borderColor: accent,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: accent,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: accent,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 5,
        data: data,
      },
    ],
  } as any;

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: true,
      text: title,
      fontColor: 'rgb(211,211,211)',
      fontSize: 16,
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            color: 'rgb(211,211,211, 0.5)',
            zeroLineColor: 'rgb(211,211,211, 0.5)',
          },
          ticks: {
            maxTicksLimit: 5,
            fontColor: 'rgb(211,211,211)',
            callback: (value: string) => {
              return value + ' ' + units;
            },
          },
        },
      ],
      xAxes: [
        {
          type: 'time',
          distribution: 'series' as 'series',
          time: {
            unit: scope as 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year',
            tooltipFormat: 'YYYY-MM-DD HH:mm',
            displayFormats: {
              hour: 'HH:mm',
              day: 'HH:mm',
              week: 'DD.MMM',
              month: 'DD.MMM',
              year: 'DD.MMM',
            },
          },
          gridLines: {
            color: 'rgb(211,211,211, 0.5)',
            zeroLineColor: 'rgb(211,211,211, 0.5)',
          },
          ticks: {
            maxTicksLimit: 10,
            fontColor: 'rgb(211,211,211)',
          },
        },
      ],
    },
  };

  return <Line data={dataset} options={options} />;
};

export default SimpleLineChart;
