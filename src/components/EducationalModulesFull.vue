<template>
  <div class="resultados">
    <span
      >{{ Math.min(this.page * 6, this.totalResults) }} de
      {{ this.totalResults }} resultados</span
    >
  </div>
  <div class="flex row">
    <div v-for="(curso, index) in cursos" :key="index" class="curso">
      <v-img
        :src="curso.capa"
        class="curso-imagem"
        height="180"
        width="100%"
        cover
      ></v-img>

      <div class="card">
        <p class="card-title">{{ curso.titulo }}</p>
        <span class="card-subtitle">{{ curso.parceiros }}</span>
      </div>

      <CourseDetails :curso="curso" :small="true" />

      <div class="curso-description">
        <span>{{ curso.sobre }}</span>
        <div class="ver-curso">
          <router-link
            :to="{ name: 'cursos-detalhes', params: { id: curso.id } }"
            class="btn-curso"
            >Ver curso</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!-- TODO: Personalizar o CSS -->
  <v-pagination
    v-model="page"
    :total-visible="5"
    :length="Math.ceil(this.totalResults / 6)"
  />
</template>

<script>
import { obterCursos } from '@/services/cursosService';
import CourseDetails from './CourseDetails.vue';

export default {
  props: {
    tipoConsulta: {
      type: String,
      required: true,
    },
  },
  watch: {
    tipoConsulta: {
      handler: 'atualizarConteudo',
      immediate: true,
    },
    page: {
      handler: 'atualizarConteudo',
      immediate: true,
    },
  },
  data() {
    return {
      cursos: null,
      page: 1,
      totalResults: 0,
    };
  },
  methods: {
    async atualizarConteudo() {
      try {
        const totalResultsResponse = await obterCursos({
          cateroria: this.tipoConsulta,
        });

        this.cursos = await obterCursos({
          _page: this.page,
          _limit: 6,
          cateroria: this.tipoConsulta,
        });

        this.totalResults = totalResultsResponse.length;

        console.log(`6 de ${this.totalResults} resultados`);
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: { CourseDetails },
};
</script>

<style lang="scss" scoped>
.resultados {
  text-align: left;
  margin-bottom: 20px;
  span {
    font-size: 12px;
    color: $cor-botao;
  }
}
.row {
  //TODO: Remover important, melhorar.
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.curso {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 286px;
  border-radius: 15px;
  gap: 8px;
  margin-bottom: 20px;
  .curso-imagem {
    border-radius: 15px;
  }
  .card {
    min-width: 30%;
    .card-title {
      text-align: left;
      padding: 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      font-size: 18px;
      min-height: 54px;
    }
    .card-subtitle {
      @extend .card-title;
      padding-top: 8px;
      color: $vermelho-detalhe;
      font-weight: 600;
      font-size: 12px;
      min-height: 44px;
    }
  }

  .curso-description {
    span {
      font-size: 12px;
      text-align: justify;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .ver-curso {
    text-align: end;
    display: grid;
    .btn-curso {
      color: $cor-botao;
      font-size: 12px;
    }
  }
}
</style>
