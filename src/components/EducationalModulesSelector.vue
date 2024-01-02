<template>
  <div class="flex selector">
    <v-tabs v-model="tab">
      <v-tab
        v-for="(item, index) in items"
        :key="index"
        class="v-tab"
        :value="item.tipoConsulta"
      >
        {{ item.label }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item
        v-for="item in items"
        :key="item"
        :value="item.tipoConsulta"
      >
        <component :is="item.component" :tipo-consulta="item.tipo_consulta" />
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import EducationalModulesList from './EducationalModulesList.vue';
import EducationalModulesFull from './EducationalModulesFull.vue';

export default {
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  data() {
    //TODO: Verificar essa prop
    return {
      tab: null,
    };
  },
  components: { EducationalModulesList, EducationalModulesFull },
};
</script>

<style lang="scss" scoped>
.selector {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  font-weight: 600;
  justify-content: flex-start;
  margin: 20px 0;
}
.v-tab {
  font-size: 16px;
  padding: 0;
  text-transform: unset;
  padding-right: 16px;
  font-weight: bold;
}
:deep(.v-slide-group__content) {
  gap: 16px;
}
:deep(.v-slide-group__prev),
:deep(.v-slide-group__next) {
  display: none;
}
</style>
