<template>
  <div>
    <canvas ref="confirmedGeoCanvas"></canvas>
  </div>
</template>

<script>
import * as ChartJS from 'chart.js';
import * as ChartGeo from 'chartjs-chart-geo';

import {
  Chart as ChartJS2,
  CategoryScale,
  Tooltip,
  Title,
  Legend,
} from 'chart.js';

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
// import { Chart } from 'chart.js';
// import {
//   BubbleMapController,
//   GeoFeature,
//   ColorScale,
//   ProjectionScale,
// } from 'chartjs-chart-geo';

// Chart.register(BubbleMapController, GeoFeature, ColorScale, ProjectionScale);

export default {
  mounted() {
    this.generateMap();
  },
  methods: {
    generateMap() {
      fetch(
        'https://raw.githubusercontent.com/markmarkoh/datamaps/master/src/js/data/bra.topo.json'
      )
        .then((r) => r.json())
        .then((br) => {
          const geoData = ChartGeo.topojson.feature(
            br,
            br.objects.bra
          ).features;

          console.log(geoData);
          const chartData = {
            labels: geoData.map((i) => i.properties.name),
            datasets: [
              {
                outline: geoData,
                data: geoData.map((i) => ({
                  feature: i,
                  value: i.properties.confirmed,
                })),
              },
            ],
          };

          const chartOptions = {
            maintainAspectRatio: true,
            responsive: true,
            showOutline: false,
            showGraticule: false,
            legend: {
              display: false,
            },
            scale: {
              projection: 'mercator',
            },
            geo: {
              colorScale: {
                display: true,
                interpolate: 'reds',
                missing: 'white',
                legend: {
                  display: 'true',
                  position: 'bottom-right',
                },
              },
            },
          };

          const ctx = this.$refs.confirmedGeoCanvas.getContext('2d');
          new ChartJS.Chart(ctx, {
            type: 'choropleth', //bubbleMap
            data: chartData,
            options: chartOptions,
          });
        });
    },
  },
};
</script>
