<template>
  <div>
    <canvas ref="pie" width="400" height="400"></canvas>
  </div>
</template>

<script>
import * as Chart from 'chart.js';

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
      //TODO: Mudança na legenda alterou o tolltip, ajustar
      const chartData = {
        labels: this.usuariosPorCurso.map(
          (curso) => `${curso.curso}: ${curso.usuarios}`
        ),
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
  },
};
</script>
