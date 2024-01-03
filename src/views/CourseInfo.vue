<template>
  <div v-if="curso" class="flex config">
    <!-- TODO: Implementar manualmente, muito limitado -->
    <v-parallax height="200" :src="curso.capa" scale="1">
      <div class="parallax">
        <BreadCrumbs :items="items" style="color: white" />
        <h1>{{ curso.titulo }}</h1>
        <h2>{{ curso.parceiros }}</h2>
      </div>
    </v-parallax>

    <div class="inside"></div>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs.vue';
import { obterCursoPorId } from '@/services/cursosService';

export default {
  components: {
    BreadCrumbs,
  },
  data: () => ({
    curso: null,
    items: [
      {
        title: 'Início',
        disabled: false,
        to: { name: 'home' },
      },
      {
        title: 'Cursos',
        disabled: false,
        to: { name: 'modulos' },
      },
      {
        title: 'Módulos',
        disabled: false,
        to: { name: 'modulos' },
      },
      //TODO: Dinamico
      {
        title: '',
        disabled: true,
      },
    ],
  }),
  async created() {
    try {
      this.curso = await obterCursoPorId(this.$route.params.id);
      console.log(this.curso);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.config {
  flex-direction: column;
  justify-content: center;
  padding: 40px 0 15px;
  .inside,
  .parallax {
    width: 900px;
    margin: 0 auto;
    text-align: center;
    h1 {
      text-align: left;
      color: $white;
      font-size: 24px;
      margin-bottom: 18px;
    }
    h2 {
      @extend h1;
      font-size: 18px;
      font-weight: 100;
    }
  }
}
</style>
