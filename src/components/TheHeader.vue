<template>
  <div id="header">
    <div class="inside flex">
      <router-link to="/"><img src="../assets/img/logo.png" /></router-link>
      <NavBar :show-list="showList" />
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
  data() {
    return {
      showList: true,
    };
  },
  mounted() {
    window.addEventListener('resize', this.updateShowList);
    this.updateShowList();
  },
  methods: {
    updateShowList() {
      this.showList = window.innerWidth >= 920; // showList será false abaixo de 920 pixels
    },
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateShowList);
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

@media only screen and (min-width: 920px) and (max-width: 1279px) {
  #header {
    .inside {
      width: 920px;
      .v-autocomplete,
      .btn-cadastrar {
        display: none;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 919px) {
  #header {
    .inside {
      width: 750px;
    }
  }
}

@media only screen and (max-width: 767px) {
  #header {
    .inside {
      width: 460px;
      .btn-cadastrar {
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 467px) {
  #header {
    .inside {
      width: 360px;
      .btn-cadastrar,
      .btn-login {
        display: none;
      }
    }
  }
}
</style>
