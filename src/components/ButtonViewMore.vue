<template>
  <router-link to="/modulos">
    <base-button class="ver-mais">Ver mais</base-button>
  </router-link>
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
.ver-mais {
  padding: 0 40px;
  font-size: 18px;
}
</style>
