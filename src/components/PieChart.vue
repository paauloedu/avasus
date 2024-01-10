<template>
  <div>
    <canvas
      ref="pie"
      :width="getChartWidth()"
      :height="getChartHeight()"
    ></canvas>
  </div>
</template>

<script>
import * as Chart from 'chart.js';
import { legendFormatter } from '@/utils/formatUtils';

export default {
  props: {
    usuariosPorCurso: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.generateMap();
  },
  methods: {
    generateMap() {
      const chartData = {
        labels: this.usuariosPorCurso.map((curso) => `${curso.curso}`),
        datasets: [
          {
            data: this.usuariosPorCurso.map((curso) => curso.usuarios),
            backgroundColor: ['#FFF', '#F6303F', '#707070', '#2F2E41'],
          },
        ],
      };
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          position: 'bottom',
          align: 'start',
          labels: {
            usePointStyle: true,
            align: 'start',
            padding: 20,
            fontSize: 14,
            fontStyle: 'bold',
            generateLabels: legendFormatter,
          },
        },
      };

      const ctx = this.$refs.pie.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: chartOptions,
      });
    },
    getChartWidth() {
      if (window.innerWidth >= 920) {
        return 280;
      }
      if (window.innerWidth < 920) {
        return 200;
      }
    },
    getChartHeight() {
      if (window.innerWidth >= 920) {
        return 260;
      }
      if (window.innerWidth < 920) {
        return 180;
      }
    },
  },
};
</script>
