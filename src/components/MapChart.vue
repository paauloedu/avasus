<template>
  <div>
    <canvas
      ref="confirmedGeoCanvas"
      :width="getChartWidth()"
      :height="getChartHeight()"
    ></canvas>
  </div>
</template>

<script>
import * as Chart from 'chart.js';
import * as ChartGeo from 'chartjs-chart-geo';

export default {
  props: {
    usuariosPorEstado: {
      type: Array,
      required: true,
    },
  },
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

          const chartData = {
            labels: geoData.map((d) => d.properties.name),
            datasets: [
              {
                outline: geoData,
                outlineBorderColor: 'white',
                outlineBackgroundColor: 'rgba(205, 205, 205, 1)',
                showOutline: true,
                backgroundColor: '#F6303F', // COR PADRÃO
                data: brStatesCapitals.map((i) => {
                  const estado = this.usuariosPorEstado.find(
                    (estado) => estado.estados === i.name
                  );
                  const radiusScale = estado
                    ? estado.usuarios_totais / 11000
                    : 0;
                  /* Quantizar valores para as bubbles?

                  let radiusScale;

                  if (estado.usuarios_totais >= 200000) {
                    radiusScale = 20;
                  } else if (estado.usuarios_totais >= 150000) {
                    radiusScale = 15;
                  } else if (estado.usuarios_totais >= 100000) {
                    radiusScale = 10;
                  } else {
                    radiusScale = 8;
                  }
                  
                  */
                  return {
                    name: i.name,
                    latitude: i.latitude,
                    longitude: i.longitude,
                    value: estado ? estado.usuarios_totais : 0,
                    r: radiusScale,
                  };
                }),
              },
            ],
          };

          const chartOptions = {
            legend: {
              display: true,
              align: 'start',
              position: 'bottom',
              labels: {
                usePointStyle: true,
                align: 'start',
                padding: 20,
                fontSize: 14,
                fontStyle: 'bold',
              },
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
    getChartWidth() {
      if (window.innerWidth >= 920) {
        return 280;
      }
      if (window.innerWidth < 920) {
        return 80;
      }
    },
    getChartHeight() {
      if (window.innerWidth >= 920) {
        return 260;
      }
      if (window.innerWidth < 920) {
        return 60;
      }
    },
  },
};
</script>
