<template>
  <div class="flex">
    <v-tabs v-model="tab">
      <v-tab v-for="(item, index) in items" :key="index">
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
        { label: 'Mais Populares' },
        {
          label: 'Mais Bem Avaliados',
        },
        { label: 'Mais Recentes' },
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
</style>
