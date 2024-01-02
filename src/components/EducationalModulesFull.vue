<template>
  <div class="resultados">
    <span>6 de {{}} resultados</span>
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
      </div>
    </div>
  </div>
  <v-pagination v-model="page" :total-visible="5" :length="100" />
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
  //TODO: Melhorar. Como pegar todos os possiveis resultados sem consultar o back?
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
    };
  },
  methods: {
    async atualizarConteudo() {
      try {
        //TODO: Pegar a pagina atual e atualizar conforme passa a paginação
        console.log(this.page);
        this.cursos = await obterCursos({
          _page: this.page,
          _limit: 6,
          cateroria: this.tipoConsulta,
        });
        console.log(this.cursos.length);
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
      min-height: 2.6em;
    }
    .card-subtitle {
      @extend .card-title;
      padding-top: 8px;
      color: $vermelho-detalhe;
      font-weight: 600;
      font-size: 12px;
      min-height: 2.4em;
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
}
</style>
