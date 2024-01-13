<template>
  <base-button class="btn-login">Entrar</base-button>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
};
</script>
<style lang="scss" scoped>
.btn-login {
  background-color: $white;
  color: $cor-botao;
  margin-right: 10px;
}
</style>
