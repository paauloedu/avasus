<template>
  <ul class="flex" id="navbar" v-if="showList">
    <li
      v-for="(item, index) in items"
      :key="index"
      @click="this.$router.push(item.route)"
    >
      {{ item.text }}
    </li>
  </ul>

  <v-menu v-else>
    <template #activator="{ props }">
      <v-btn elevation="0" v-bind="props">
        <v-icon icon="mdi-menu"></v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        @click="this.$router.push(item.route)"
      >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    showList: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    items: [
      { text: 'Início', route: '/' },
      { text: 'Sobre Nós', route: '/' },
      { text: 'Cursos', route: '/modulos' },
      { text: 'Parceiros', route: '/parceiros' },
      { text: 'Transparência', route: '/transparencia' },
      { text: 'Contato', route: '/' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  margin-left: 40px;
  margin-right: 20px;
}

li {
  margin-right: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 600;
  padding: 10px 0;

  &:hover {
    color: $cor-primaria;
  }

  &:first-child {
    color: $cor-botao;
  }

  &:last-child {
    margin-right: 0px;
  }
}
</style>
