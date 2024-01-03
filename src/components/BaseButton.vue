<template>
  <v-btn rounded outlined elevation="0">
    <slot></slot>
  </v-btn>
</template>

<style lang="scss" scoped>
.v-btn {
  text-transform: capitalize;
  border: 1px solid $cor-botao;
  font-weight: 600;
  background-color: $cor-botao;
  color: $white;
}
</style>
