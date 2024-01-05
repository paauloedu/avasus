<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import * as ChartJS from 'chart.js';
import * as ChartGeo from 'chartjs-chart-geo';
import Papa from 'papaparse';

import { Chart } from 'chart.js';
import {
  Chart as ChartJS2,
  CategoryScale,
  Tooltip,
  Title,
  Legend,
} from 'chart.js';
import { BubbleMapController } from 'chartjs-chart-geo';

Chart.register(BubbleMapController);

ChartJS2.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ChartGeo.ChoroplethController,
  ChartGeo.ProjectionScale,
  ChartGeo.ColorScale,
  ChartGeo.GeoFeature
);

export default {
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const [us, data] = await Promise.all([
          fetch('https://unpkg.com/us-atlas/states-10m.json').then((r) =>
            r.json()
          ),
          fetch(
            'https://gist.githubusercontent.com/mbostock/9535021/raw/928a5f81f170b767162f8f52dbad05985eae9cac/us-state-capitals.csv'
          )
            .then((r) => r.text())
            .then(
              (d) => Papa.parse(d, { dynamicTyping: true, header: true }).data
            ),
        ]);

        const states = ChartGeo.topojson.feature(
          us,
          us.objects.states
        ).features;

        new ChartJS.Chart(document.getElementById('canvas').getContext('2d'), {
          type: 'bubbleMap',
          data: {
            labels: data.map((d) => d.description),
            datasets: [
              {
                outline: states,
                showOutline: true,
                backgroundColor: 'steelblue',
                data: data.map((d) =>
                  Object.assign(d, { value: Math.round(Math.random() * 10) })
                ),
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
              datalabels: {
                align: 'top',
                /* eslint-disable */
                formatter: (v) => {
                  return v.description;
                },
              },
            },
            scales: {
              projection: {
                axis: 'x',
                projection: 'albersUsa',
              },
              size: {
                axis: 'x',
                size: [1, 20],
              },
            },
          },
        });
      } catch (error) {
        console.error('Error loading data:', error);
      }
    },
  },
};
</script>
