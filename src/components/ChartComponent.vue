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
          const brStatesCapitals = require('@/utils/br-states.json');

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
                outlineBorderColor: 'white',
                outlineBackgroundColor: 'rgba(205, 205, 205, 1)',
                showOutline: true,
                backgroundColor: 'red', // COR DAS BUBBLES
                data: brStatesCapitals.map((i) => ({
                  name: i.name,
                  latitude: i.latitude,
                  longitude: i.longitude,
                  value: Math.random() * 10,
                })),
              },
            ],
          };

          const chartOptions = {
            legend: {
              display: false,
            },
            scale: {
              projection: 'mercator',
            },
          };

          const ctx = this.$refs.confirmedGeoCanvas.getContext('2d');
          new Chart(ctx, {
            type: 'bubbleMap',
            data: chartData,
            options: chartOptions,
          });
        });
    },
  },
};
</script>
