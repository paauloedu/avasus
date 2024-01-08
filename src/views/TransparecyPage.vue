<template>
  <div class="flex">
    <div class="inside">
      <BreadCrumbs :items="items" />
      <h1>Transparência</h1>

      <div class="dados-gerais">
        <h2>Dados gerais</h2>
        <div class="dados-detalhes">
          <div>
            <v-icon class="dados-info" icon="mdi-account-multiple" />
            <span>Total de usuários registrados</span>
            <p>{{ transparencia.usuarios_registrados }}</p>
          </div>
          <div>
            <v-icon class="dados-info" icon="mdi-file-arrow-up-down" />
            <span>Inscrições realizadas</span>
            <p>{{ transparencia.incricoes_realizadas }}</p>
          </div>
          <div>
            <v-icon class="dados-info" icon="mdi-school" />
            <span>Cursos ativos</span>
            <p>{{ transparencia.cursos_ativos }}</p>
          </div>
          <div>
            <v-icon class="dados-info" icon="mdi-seal" />
            <span>Direito à Certificação</span>
            <p>{{ transparencia.direito_certificacao }}</p>
          </div>
          <div>
            <v-icon class="dados-info" icon="mdi-cash" />
            <span>Investimento médio por curso</span>
            <p>{{ transparencia.investimento_medio_curso }}</p>
          </div>
          <div>
            <v-icon class="dados-info" icon="mdi-account-cash" />
            <span>Investimento médio por aluno</span>
            <p>{{ transparencia.investimento_medio_aluno }}</p>
          </div>
        </div>
      </div>

      <div class="usuarios">
        <div class="usuarios-por-curso">
          <h2>Usuários por curso</h2>
          <div class="chart">
            <pie-chart
              v-if="loaded"
              :usuarios-por-curso="transparencia.usuarios_por_curso"
            />
          </div>
        </div>
        <div class="usuarios-por-estado">
          <h2>Usuários por Estado</h2>
          <MapChart
            v-if="loaded"
            :usuarios-por-estado="transparencia.usuarios_por_estado"
            class="chart"
          />
          <!-- <ChartComponent class="chart" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs.vue';
import TransparenciaDTO from '@/dto/TransparenciaDTO';
import { obterTransparencia } from '@/services/transparenciaService';
import PieChart from '@/components/PieChart.vue';
import MapChart from '@/components/MapChart.vue';
// import ChartComponent from '@/components/ChartComponent.vue';

export default {
  components: {
    BreadCrumbs,
    PieChart,
    MapChart,
    // ChartComponent,
  },
  data: () => ({
    transparencia: TransparenciaDTO,
    loaded: null,
    items: [
      {
        title: 'Início',
        disabled: false,
        to: { name: 'home' },
      },
      {
        title: 'Transparência',
        disabled: true,
      },
    ],
  }),
  async created() {
    try {
      this.transparencia = await obterTransparencia();
      this.loaded = true;
      console.log(this.transparencia);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.inside {
  width: 900px;
  margin: 0 auto;
  text-align: center;
  h1 {
    color: $cor-primaria;
    font-size: 29px;
    margin-bottom: 16px;
  }
}
.dados-gerais {
  justify-content: center;
  flex-direction: column;
  .dados-detalhes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
    span {
      font-size: 15px;
      font-weight: bold;
    }
    p {
      font-size: 22px;
      color: $cor-primaria;
      margin-top: 5px;
      font-weight: bold;
    }
    div {
      margin-bottom: 20px;
    }
    .dados-info {
      margin-right: 6px;
      color: $cor-primaria;
    }
  }
}
h2 {
  font-size: 20px;
  color: $cor-primaria;
}
.usuarios {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  margin-bottom: 100px;
  .usuarios-por-curso,
  .usuarios-por-estado {
    flex: 0 0 49%;
    justify-content: center;
    flex-direction: column;
  }
  .chart {
    margin-top: 10px;
  }
}
.dados-gerais,
.usuarios-por-curso,
.usuarios-por-estado {
  background-color: $cinza-claro;
  display: flex;
  border-radius: 15px;
  padding: 15px;
}
@media only screen and (min-width: 768px) and (max-width: 919px) {
  .flex {
    .inside {
      width: 768px;
    }
  }
}
</style>
