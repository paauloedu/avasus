<template>
  <div class="resultados">
    <span
      >{{ Math.min(this.page * 6, this.totalResults) }} de
      {{ this.totalResults }} resultados</span
    >
  </div>
  <div class="flex row">
    <div v-for="(curso, index) in cursos" :key="index" class="curso">
      <v-img :src="curso.capa" class="curso-imagem" cover />

      <div class="card">
        <router-link :to="{ name: 'cursos-detalhes', params: { id: curso.id } }"
          ><p class="card-title">{{ curso.titulo }}</p></router-link
        >
        <span class="card-subtitle">{{ curso.parceiros }}</span>
      </div>

      <CourseDetails :curso="curso" :small="true" />

      <div class="curso-description">
        <span>{{ curso.sobre }}</span>
        <div class="ver-curso">
          <router-link
            :to="{ name: 'cursos-detalhes', params: { id: curso.id } }"
            class="btn-curso"
          >
            Ver curso
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <v-pagination
    v-model="page"
    :total-visible="5"
    :length="Math.ceil(this.totalResults / 6)"
    density="compact"
    class="v-pagination"
  />
</template>

<script>
import { obterCursos } from '@/services/cursosService';
import CourseDetails from './CourseDetails.vue';

export default {
  props: {
    tipoConsulta: {
      type: [String, null],
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
        let totalResultsResponse;

        if (this.tipoConsulta) {
          totalResultsResponse = await obterCursos({
            cateroria: this.tipoConsulta,
          });
        } else {
          totalResultsResponse = await obterCursos();
        }

        this.cursos = await obterCursos({
          _page: this.page,
          _limit: 6,
          cateroria: this.tipoConsulta,
        });

        this.totalResults = totalResultsResponse.length;
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 460px;
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
    height: 180px;
    width: 100%;
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
      min-height: 90px;
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
.v-pagination {
  :deep(li.v-pagination__item--is-active) {
    background-color: $cor-primaria;
    border-radius: 6px;
    color: white;
    border-radius: 6px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 919px) {
  .row {
    .curso {
      width: 365px;
    }
  }
}

@media only screen and (max-width: 767px) {
  .row {
    .curso {
      width: 460px;
      .curso-imagem {
        height: 220px;
        width: 100%;
      }
    }
  }
}

@media only screen and (max-width: 467px) {
  .row {
    .curso {
      width: 360px;
    }
  }
}
</style>
