<template>
  <v-breadcrumbs density="compact" class="v-breadcrumbs" :items="items">
    <template #title="{ item }">
      {{ item.title }}
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.v-breadcrumbs {
  padding: 10px 6px;
  margin-bottom: 30px;
}
</style>
