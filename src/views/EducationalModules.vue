<template>
  <div class="flex config">
    <div class="inside">
      <BreadCrumbs :items="items" />

      <h1>Módulos Educacionais</h1>
      <EducationalModulesSelector :items="labels" />
    </div>
  </div>
</template>

<script>
import EducationalModulesSelector from '@/components/EducationalModulesSelector.vue';
import BreadCrumbs from '@/components/BreadCrumbs.vue';

export default {
  components: {
    EducationalModulesSelector,
    BreadCrumbs,
  },
  data: () => ({
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
        disabled: true,
      },
    ],
    labels: [
      {
        label: 'Covid 19',
        tipo_consulta: 'Covid 19',
        component: 'EducationalModulesFull',
      },
      {
        label: 'Sífilis e outras Ist’s',
        tipo_consulta: 'Síflis e outras ist',
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
      {
        label: 'Sistemas prisional',
        tipo_consulta: 'Sistema prisional',
        component: 'EducationalModulesFull',
      },
      {
        label: 'OPAS',
        tipo_consulta: 'OPAS',
        component: 'EducationalModulesFull',
      },
      {
        label: 'Ver Todos',
        tipo_consulta: null,
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
}
h1 {
  color: $cor-primaria;
  font-size: 29px;
}

@media only screen and (min-width: 768px) and (max-width: 919px) {
  .config {
    .inside {
      width: 750px;
    }
  }
}

@media only screen and (max-width: 767px) {
  .config {
    .inside {
      width: 460px;
    }
  }
}

@media only screen and (max-width: 467px) {
  .config {
    .inside {
      width: 360px;
    }
  }
}
</style>
