<template>
  <div id="header">
    <div class="inside flex">
      <router-link to="/"><img src="../assets/img/logo.png" /></router-link>
      <NavBar />
      <SearchBar />
      <ButtonLogin />
      <ButtonRegister />
    </div>
  </div>
</template>

<script>
import ButtonRegister from '@/components/ButtonRegister.vue';
import ButtonLogin from '@/components/ButtonLogin.vue';
import NavBar from '@/components/NavBar.vue';
import SearchBar from './SearchBar.vue';

export default {
  components: {
    ButtonRegister,
    ButtonLogin,
    NavBar,
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  min-height: 67px;
  position: fixed;
  background-color: $white;
  z-index: 99;
  .inside {
    max-width: 1280px;
    padding: 11.5px 0;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  .flex {
    justify-content: space-between;
  }
}
</style>
