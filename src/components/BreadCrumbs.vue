<template>
  <v-breadcrumbs density="compact" class="v-breadcrumbs" :items="items">
    <template #title="{ item }">
      <span :class="{ 'last-item': item === items[items.length - 1] }">{{
        item.title
      }}</span>
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
.last-item {
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
