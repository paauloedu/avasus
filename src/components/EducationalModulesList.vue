<template>
  <div class="flex">
    <div v-for="(curso, index) in cursos" :key="index" class="curso">
      <router-link :to="{ name: 'cursos-detalhes', params: { id: curso.id } }"
        ><v-img :src="curso.capa" class="curso-imagem" cover></v-img
      ></router-link>

      <div class="card">
        <router-link :to="{ name: 'cursos-detalhes', params: { id: curso.id } }"
          ><p class="card-title">{{ curso.titulo }}</p></router-link
        >
        <span class="card-subtitle">{{ curso.parceiros }}</span>
      </div>

      <CourseDetails :curso="curso" />

      <ButtonViewModules />
    </div>
  </div>
</template>

<script>
import ButtonViewModules from '../components/ButtonViewModules.vue';
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
  },
  components: {
    ButtonViewModules,
    CourseDetails,
  },
  data() {
    return {
      cursos: null,
    };
  },
  methods: {
    async atualizarConteudo() {
      try {
        this.cursos = await obterCursos({
          _limit: 3,
          _sort: this.tipoConsulta,
          _order: 'desc',
        });
        console.log(this.cursos);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  flex-direction: column;
  gap: 20px;
}
.curso {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: $cinza-claro;
  border-radius: 15px;
  padding: 15px;
  gap: 14px;
  .curso-imagem {
    border-radius: 15px;
    height: 90px;
    width: 90px;
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
    }
    .card-subtitle {
      @extend .card-title;
      padding-top: 8px;
      color: $vermelho-detalhe;
      font-weight: 600;
      font-size: 12px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 919px) {
  .flex {
    .curso {
      .ver-modulos {
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .flex {
    .curso {
      flex-direction: column;
      .ver-modulos {
        display: none;
      }
      .curso-imagem {
        border-radius: 15px;
        height: 200px;
        width: 430px;
      }
    }
  }
}
</style>
