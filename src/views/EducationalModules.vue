<template>
  <div class="flex config">
    <div class="inside">
      <v-breadcrumbs density="compact" class="v-breadcrumbs" :items="items">
        <template #title="{ item }">
          {{ item.title }}
        </template>
      </v-breadcrumbs>

      <h1>Módulos Educacionais</h1>
      <EducationalModulesSelector :items="labels" />
    </div>
  </div>
</template>

<script>
import EducationalModulesSelector from '@/components/EducationalModulesSelector.vue';

export default {
  components: {
    EducationalModulesSelector,
  },
  data: () => ({
    items: [
      {
        title: 'Início',
        disabled: false,
        href: '/',
      },
      {
        title: 'Cursos',
        disabled: false,
        href: '/',
      },
      {
        title: 'Módulos',
        disabled: true,
        href: '/modulos',
      },
    ],
    labels: [
      {
        label: 'Covid 19',
        tipo_consulta: 'Covid 19',
        component: 'EducationalModulesFull',
      },
      //FIXME: Não aparece em categoria,
      {
        label: 'Sífilis e outras Ist’s',
        tipo_consulta: 'Sífilis',
        component: 'EducationalModulesFull',
      },
      {
        label: 'Preceptoria',
        tipo_consulta: 'Preceptoria',
        component: 'EducationalModulesFull',
      },
      {
        label: 'Doenças raras',
        tipo_consulta: 'Doenças raras',
        component: 'EducationalModulesFull',
      },
      {
        label: 'Web Palestras',
        tipo_consulta: 'WebPalestras',
        component: 'EducationalModulesFull',
      },
      //FIXME: Nao aparece em categoria
      {
        label: 'Sistemas prisional',
        tipo_consulta: 'Prisional',
        component: 'EducationalModulesFull',
      },
      //FIXME: Aparece apenas em parceiros
      {
        label: 'OPAS',
        tipo_consulta: 'OPAS',
        component: 'EducationalModulesFull',
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
  .v-breadcrumbs {
    padding: 10px 6px;
    margin-bottom: 30px;
  }
}
h1 {
  color: $cor-primaria;
  font-size: 29px;
}
</style>
