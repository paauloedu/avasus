<template>
  <div>
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js';
import { Pie } from 'vue-chartjs';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: 'PieChart',
  components: {
    Pie,
  },
  props: {
    usuariosPorCurso: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chartData: {
        labels: this.usuariosPorCurso.map((curso) => curso.curso),
        datasets: [
          {
            data: this.usuariosPorCurso.map((curso) => curso.usuarios),
            backgroundColor: ['#FFF', '#F6303F', '#707070', '#2F2E41'],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              align: 'start',
              padding: 20,
              fontSize: 18,
            },
          },
        },
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      ChartJS.overrides['pie'].plugins.legend.labels.textAlign = 'left';
    });
  },
};
</script>
