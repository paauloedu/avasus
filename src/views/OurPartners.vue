<template>
  <div class="flex config">
    <div class="inside">
      <BreadCrumbs :items="items" />
      <h1>Nossos Parceiros</h1>
      <div class="resultados">
        <span
          >{{ Math.min(this.page * 6, this.totalResults) }} de
          {{ this.totalResults }} resultados</span
        >
      </div>

      <div class="flex parceiros">
        <div
          v-for="(parceiro, index) in parceiros"
          :key="index"
          class="parceiro"
        >
          <v-img
            :src="parceiro.capa"
            class="parceiros-imagem"
            height="200"
          ></v-img>
          <p class="parceiros-titulo">{{ parceiro.titulo }}</p>
        </div>
      </div>

      <v-pagination
        v-model="page"
        :total-visible="5"
        :length="Math.ceil(this.totalResults / 6)"
      />
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs.vue';
import { obterParceiros } from '@/services/parceirosService';
import ParceirosDTO from '@/dto/ParceirosDTO';

export default {
  components: {
    BreadCrumbs,
  },
  data: () => ({
    parceiros: ParceirosDTO,
    page: 1,
    totalResults: 0,
    items: [
      {
        title: 'Início',
        disabled: false,
        to: { name: 'home' },
      },
      {
        title: 'Parceiros',
        disabled: true,
      },
    ],
  }),
  watch: {
    page: {
      handler: 'atualizarConteudo',
      immediate: true,
    },
  },
  methods: {
    async atualizarConteudo() {
      try {
        const totalResultsResponse = await obterParceiros();

        this.parceiros = await obterParceiros({
          _page: this.page,
          _limit: 6,
        });

        this.totalResults = totalResultsResponse.length;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.config {
  flex-direction: column;
  justify-content: center;
  padding: 40px 0 15px;
  .inside {
    width: 900px;
    margin: 0 auto;
    text-align: center;
  }
}
.resultados {
  text-align: left;
  margin-bottom: 20px;
  span {
    font-size: 12px;
    color: $cor-botao;
    font-weight: bold;
    padding-left: 8px;
  }
}
h1 {
  text-align: left;
  padding-left: 6px;
  color: $cor-primaria;
  font-size: 29px;
  margin-bottom: 16px;
}
.parceiros {
  flex-wrap: wrap;
  margin-bottom: 40px;
  width: 100%;
  justify-content: space-between;
  .parceiro {
    flex: 0 0 30%;
  }
  .parceiros-imagem {
    border-bottom: 2px solid $cor-primaria;
  }
  .parceiros-titulo {
    margin-top: 5px;
    font-weight: bold;
  }
}
@media only screen and (min-width: 768px) and (max-width: 919px) {
  .config {
    .inside {
      width: 768px;
    }
  }
}
</style>
