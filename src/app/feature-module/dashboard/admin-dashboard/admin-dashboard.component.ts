import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexTooltip,
  ApexFill,
  ApexResponsive

} from "ng-apexcharts";
import { routes } from "src/app/core/helpers/routes/routes";
/* eslint-disable @typescript-eslint/no-explicit-any */
export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis | ApexYAxis[];
  legend: ApexLegend;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
  fill: ApexFill;
  labels: string[];

};

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent {
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions2: Partial<ChartOptions> | any;
  public chartOptions1: Partial<ChartOptions> | any;
  public layoutWidth = '1';
  public routes = routes;
  constructor() {
    this.chartOptions2 = {
      series: [
        {
          name: "On Leave",
          data: [120, 90, 60, 90, 60, 90,120],
          color: '#ff9b44',
        },
        {
          name: "Working",
          data: [85, 75, 57, 85, 61, 75,85],
          color: '#fc6075',
        },

      ],
      chart: {
        type: "bar",
        height: 350
      },
      grid: {
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: true
            }
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "1st",
          "2nd",
          "3rd",
          "4th",
          "5th",
          "6th"
        ]
      },
      yaxis: {
        title: {
          text: "$ (Employee Count)"
        }
      },
      fill: {
        opacity: 1
      },
    };
    this.chartOptions1 = {
      series: [
        {
          name: "series1",
          data: [50, 75, 50, 75, 50, 75, 100],
          color: '#ff9b44',

        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      grid: {
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: true
            }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]

      },
    };
   }

}
