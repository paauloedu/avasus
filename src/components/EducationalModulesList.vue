<template>
  <div class="flex">
    <div v-for="(curso, index) in cursos" :key="index" class="curso">
      <v-img
        :src="curso.capa"
        class="curso-imagem"
        height="90"
        width="90"
        cover
      ></v-img>

      <div class="card">
        <p class="card-title">{{ curso.titulo }}</p>
        <span class="card-subtitle">{{ curso.parceiros }}</span>
      </div>

      <!-- TODO: Extrair para component -->
      <div class="infos">
        <v-icon icon="mdi-account-multiple"></v-icon>
        <span>{{ curso.matriculados }}</span>
        <v-icon icon="mdi-clock"></v-icon>
        <span>{{ curso.duracao }}</span>
        <v-rating
          v-model="curso.avaliacao"
          half-increments
          readonly
          density="compact"
          size="small"
          class="rating"
        ></v-rating>
        <!-- TODO: Criar utilitario -->
        <span>{{
          curso.avaliacao % 1 === 0
            ? curso.avaliacao.toFixed(1)
            : curso.avaliacao
        }}</span>
      </div>

      <ButtonViewModules />
    </div>
  </div>
</template>

<script>
import ButtonViewModules from '../components/ButtonViewModules.vue';
import { obterCursos } from '@/services/cursosService';

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
  },
  data() {
    return {
      cursos: null,
    };
  },
  methods: {
    //TODO: Melhorar isso talvez
    async atualizarConteudo() {
      try {
        let sort = '';
        if (this.tipoConsulta === 'populares') {
          sort = 'matriculados';
        } else if (this.tipoConsulta === 'bem-avaliados') {
          sort = 'avaliacao';
        } else {
          sort = 'criado_em';
        }
        this.cursos = await obterCursos({
          _limit: 3,
          _sort: sort,
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
  .infos {
    display: flex;
    align-items: center;
    gap: 10px;
    color: $vermelho-detalhe;
    span {
      color: $cor-secundaria;
      font-weight: 100;
      font-size: 15px;
    }
    .rating {
      bottom: 3px;
      position: relative;
    }
  }
}
</style>
