<template>
  <v-btn rounded outlined elevation="0" @click="handleClick">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  text-transform: capitalize;
  border: 1px solid $cor-botao;
  font-weight: 600;
  background-color: $cor-botao;
  color: $white;
}
</style>
