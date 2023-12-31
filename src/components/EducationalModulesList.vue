<template>
  <div class="flex">
    <div v-for="(item, index) in items" :key="index" class="curso">
      <v-img
        :src="item.image"
        class="curso-imagem"
        height="90"
        width="90"
        cover
      ></v-img>

      <div class="card">
        <p class="card-title">{{ item.title }}</p>
        <span class="card-subtitle">{{ item.subtitle }}</span>
      </div>

      <!-- TODO: Extrair para component -->
      <div class="infos">
        <v-icon icon="mdi-account-multiple"></v-icon>
        <span>{{ item.matriculados }}</span>
        <v-icon icon="mdi-clock"></v-icon>
        <span>{{ item.duracao }}</span>
        <v-rating
          v-model="item.stars"
          half-increments
          readonly
          density="compact"
          size="small"
          class="rating"
        ></v-rating>
        <!-- TODO: Criar utilitario -->
        <span>{{
          item.stars % 1 === 0 ? item.stars.toFixed(1) : item.stars
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
  components: {
    ButtonViewModules,
  },
  data() {
    return {
      dados: null,
      items: [
        {
          image: require('../assets/img/montagem-avasus.png'),
          title: 'Sífilis: Aspectos Clínicos e Diagnóstico Diferencial',
          subtitle: 'LAIS / EBSERH',
          matriculados: '27645',
          duracao: '4h30min',
          stars: 5.0,
        },
        {
          image: require('../assets/img/slide5.jpg'),
          title: 'Sífilis: Aspectos Clínicos e Diagnóstico Diferencial',
          subtitle: 'UFRN / SEDIS /  LAIS / EBSERH',
          matriculados: '27645',
          duracao: '4h30min',
          stars: 4.0,
        },
        {
          image: require('../assets/img/slide7.jpg'),
          title: 'Políticas de atenção à saúde no sistema prisional',
          subtitle: 'UFRN / LAIS / SEDIS / HUOL / EBSERH / UC / MS',
          matriculados: '27645',
          duracao: '4h30min',
          stars: 4.5,
        },
      ],
    };
  },
  async created() {
    try {
      this.dados = await obterCursos();
      console.log(this.dados);
    } catch (error) {
      console.log(error);
    }
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
