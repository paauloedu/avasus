<template>
  <div v-if="showDate" class="curso-info" :class="{ small: small }">
    <div>
      <v-icon icon="mdi-clock" />
      <span>{{ cursoValue.duracao.replace('h', ' horas') }}</span>
    </div>

    <div>
      <v-icon icon="mdi-calendar-check" />
      <span>Desde {{ cursoValue.criado_em }}</span>
    </div>

    <div>
      <v-icon icon="mdi-account-multiple" />
      <span>{{ cursoValue.matriculados }} alunos matriculados</span>
    </div>

    <div>
      <v-rating
        v-model="cursoValue.avaliacao"
        half-increments
        readonly
        density="compact"
        class="rating"
      />
      <span
        >{{
          cursoValue.avaliacao % 1 === 0
            ? cursoValue.avaliacao.toFixed(1)
            : cursoValue.avaliacao
        }}
        ({{ cursoValue.numero_avaliacoes }} avaliações)</span
      >
    </div>
  </div>
  <!-- Telas sem data -->
  <div v-else class="infos" :class="{ small: small }">
    <v-icon :size="small ? `x-small` : `default`" icon="mdi-account-multiple" />
    <span>{{ cursoValue.matriculados }}</span>

    <v-icon :size="small ? `x-small` : `default`" icon="mdi-clock" />
    <span>{{ cursoValue.duracao }}</span>

    <v-rating
      v-model="cursoValue.avaliacao"
      half-increments
      readonly
      :size="small ? `x-small` : `default`"
      density="compact"
      class="rating"
    />
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
  align-items: baseline;
  justify-content: space-between;
  gap: 0;
  span {
    font-size: 17px;
    font-weight: bold;
  }
  .rating {
    top: 7px;
    position: relative;
  }
}

@media only screen and (min-width: 768px) and (max-width: 919px) {
  .curso-info {
    span {
      font-size: 14px;
    }
  }
}

@media only screen and (max-width: 767px) {
  .curso-info {
    flex-direction: column;
    align-items: center;
    gap: 8px;
    span {
      font-size: 14px;
    }
    .rating {
      top: 7px;
      position: relative;
    }
  }
}
</style>
