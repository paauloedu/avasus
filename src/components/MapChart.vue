<template>
  <div>
    <canvas ref="confirmedGeoCanvas"></canvas>
  </div>
</template>

<script>
import * as Chart from 'chart.js';
import * as ChartGeo from 'chartjs-chart-geo';

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
          const brStatesCapitals = require('@/utils/br-states-capitals.json');

          const geoData = ChartGeo.topojson.feature(
            br,
            br.objects.bra
          ).features;

          console.log(geoData);
          console.log(brStatesCapitals);

          const chartData = {
            labels: geoData.map((d) => d.properties.name),
            datasets: [
              {
                outline: geoData,
                data: geoData.map((i) => ({
                  feature: i,
                  value: Math.random() * 10,
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
          new Chart(ctx, {
            type: 'choropleth', //bubbleMap
            data: chartData,
            options: chartOptions,
          });
        });
    },
  },
};
</script>
