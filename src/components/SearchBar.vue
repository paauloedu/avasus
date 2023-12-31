<template>
  <v-autocomplete
    auto-select-first
    density="compact"
    item-props
    menu-icon=""
    placeholder="Buscar por um assunto..."
    prepend-inner-icon="mdi-magnify"
    rounded
    theme="light"
    variant="outlined"
    hide-no-data
    hide-details
  ></v-autocomplete>
</template>

<style lang="scss" scoped>
.v-autocomplete {
  margin-right: 10px;
  .v-field__input {
    color: red;
  }
}
:deep(.v-field__input) {
  font-size: 13px;
}
:deep(.v-field__input) {
  height: 36px;
}
</style>
