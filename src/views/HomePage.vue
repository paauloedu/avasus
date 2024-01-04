<template>
  <div>
    <!-- Slide -->
    <TheSlide />

    <!-- Conteudo -->
    <div class="flex config">
      <div class="inside">
        <h1>Módulos Educacionais</h1>
        <EducationalModulesSelector :items="labels" />
        <ButtonViewMore />
        <h1 style="margin-top: 40px; margin-bottom: 20px">Parceiros</h1>
        <ThePartners />
      </div>
    </div>
  </div>
</template>

<script>
import TheSlide from '@/components/TheSlide.vue';
import EducationalModulesSelector from '@/components/EducationalModulesSelector.vue';
import ButtonViewMore from '@/components/ButtonViewMore.vue';
import ThePartners from '@/components/ThePartners.vue';

export default {
  components: {
    TheSlide,
    EducationalModulesSelector,
    ButtonViewMore,
    ThePartners,
  },
  data: () => ({
    labels: [
      {
        label: 'Mais populares',
        tipo_consulta: 'matriculados',
        component: 'EducationalModulesList',
      },
      {
        label: 'Mais bem avaliados',
        tipo_consulta: 'avaliacao',
        component: 'EducationalModulesList',
      },
      {
        label: 'Mais recentes',
        tipo_consulta: 'criado_em',
        component: 'EducationalModulesList',
      },
    ],
  }),
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
h1 {
  color: $cor-primaria;
  font-size: 29px;
}
</style>
