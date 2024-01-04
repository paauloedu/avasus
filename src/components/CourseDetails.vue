<template>
  <div v-if="showDate" class="curso-info" :class="{ small: small }">
    <v-icon icon="mdi-clock"></v-icon>
    <!-- TODO: Criar utilitario -->
    <span>{{ cursoValue.duracao.replace('h', ' horas') }}</span>

    <v-icon icon="mdi-calendar-check"></v-icon>
    <span>Desde {{ cursoValue.criado_em }}</span>

    <v-icon icon="mdi-account-multiple"></v-icon>
    <span>{{ cursoValue.matriculados }} alunos matriculados</span>

    <v-rating
      v-model="cursoValue.avaliacao"
      half-increments
      readonly
      density="compact"
    ></v-rating>
    <!-- TODO: Criar utilitario -->
    <span
      >{{
        cursoValue.avaliacao % 1 === 0
          ? cursoValue.avaliacao.toFixed(1)
          : cursoValue.avaliacao
      }}
      ({{ cursoValue.numero_avaliacoes }} avaliações)</span
    >
  </div>
  <!-- Telas sem data -->
  <div v-else class="infos" :class="{ small: small }">
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
    showDate: Boolean,
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
.curso-info {
  @extend .infos;
  justify-content: space-between;
  gap: 0;
  span {
    font-size: 17px;
    font-weight: bold;
  }
}
</style>
