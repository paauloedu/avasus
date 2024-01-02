<template>
  <div class="infos" :class="{ small: small }">
    <v-icon
      :size="small ? `x-small` : `default`"
      icon="mdi-account-multiple"
    ></v-icon>
    <span>{{ cursoValue.matriculados }}</span>
    <v-icon :size="small ? `x-small` : `default`" icon="mdi-clock"></v-icon>
    <span>{{ cursoValue.duracao }}</span>
    <v-rating
      v-model="cursoValue.avaliacao"
      half-increments
      readonly
      :size="small ? `x-small` : `default`"
      density="compact"
      class="rating"
    ></v-rating>
    <!-- TODO: Criar utilitario -->
    <span>{{
      cursoValue.avaliacao % 1 === 0
        ? cursoValue.avaliacao.toFixed(1)
        : cursoValue.avaliacao
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    curso: {
      type: Object,
      default: () => ({}),
    },
    small: Boolean,
  },
  data() {
    return {
      cursoValue: this.curso,
    };
  },
};
</script>

<style lang="scss" scoped>
.infos {
  display: flex;
  align-items: center;
  gap: 10px;
  color: $vermelho-detalhe;
  span {
    color: $cor-secundaria;
    font-weight: 100;
    font-size: 15px;
  }
  .rating {
    bottom: 3px;
    position: relative;
  }
}
.small {
}
</style>
