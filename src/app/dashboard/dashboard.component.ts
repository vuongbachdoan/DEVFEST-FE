import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

import { dataSeries } from '../mock/tenDayRecorded';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public series: ApexAxisChartSeries;
  public chart: ApexChart;
  public dataLabels: ApexDataLabels;
  public markers: ApexMarkers;
  public title: ApexTitleSubtitle;
  public fill: ApexFill;
  public yaxis: ApexYAxis;
  public xaxis: ApexXAxis;
  public tooltip: ApexTooltip;
  public stroke: ApexStroke;

  constructor() {
    let ts2 = 1484418600000;
    let dates = [];
    let datesPredict = [];
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, dataSeries[1][i].value]);
    }
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      datesPredict.push([ts2, dataSeries[2][i].value]);
    }
    this.series = [
      {
        name: "Price History",
        data: dates,
        color: '#D1F248'
      },
      {
        name: "Price Predict",
        data: datesPredict,
        color: 'red'
      }
    ];
    this.chart = {
      type: "line",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    };
    this.dataLabels = {
      enabled: false
    };
    this.markers = {
      size: 0
    };
    this.title = {
      text: "Price changes",
      align: "left",
      style: {
        color: 'white',
        fontSize: '12px',
        fontWeight: '300',
      },
    };
    this.fill = {
      type: 'linear'
    };
    this.yaxis = {
      labels: {
        style: {
          colors: 'white',
        },
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        }
      },
      title: {
        text: 'vnd',
        style: {
          color: 'white',
          fontWeight: '300',
          fontSize: '10px',
        },
      }
    };
    this.xaxis = {
      labels: {
        format: 'HH:mm',
        style: {
          colors: 'white',
          fontWeight: '100',
          fontSize: '10px',
        },
      },
      type: 'datetime',
      tooltip: {
        formatter: function (value) {
          return new Date(value).toLocaleTimeString();
        }
      }
    };
    this.tooltip = {
      theme: 'dark',
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        }
      }
    };
    this.stroke = {
      width: 1
    }
  }
}