<template>
  <div class="flex">
    <v-tabs v-model="tab">
      <v-tab v-for="(item, index) in items" :key="index" class="v-tab">
        {{ item.label }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item v-for="item in items" :key="item" :value="item">
        <EducationalModulesList />
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import EducationalModulesList from './EducationalModulesList.vue';

export default {
  data() {
    return {
      tab: 0,
      items: [
        { label: 'Mais populares' },
        {
          label: 'Mais bem avaliados',
        },
        { label: 'Mais recentes' },
      ],
    };
  },
  components: { EducationalModulesList },
};
</script>

<style lang="scss" scoped>
.flex {
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
</style>
