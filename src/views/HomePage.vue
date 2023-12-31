<template>
  <v-carousel cycle interval="5000" height="800">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
      <div v-if="i === 0" class="description">
        <img src="@/assets/img/avasus.png" />
        <div class="underline"></div>
        <img src="@/assets/img/avasus-descricao.png" />
      </div>
    </v-carousel-item>
  </v-carousel>
  <div class="flex config">
    <div class="inside">
      <h1>Módulos Educacionais</h1>
      <EducationalModulesSelector />
      <ButtonViewMore />
    </div>
  </div>
</template>

<script>
import ButtonViewMore from '@/components/ButtonViewMore.vue';
import EducationalModulesSelector from '@/components/EducationalModulesSelector.vue';

export default {
  components: {
    ButtonViewMore,
    EducationalModulesSelector,
  },
  data() {
    return {
      items: [
        {
          src: require('../assets/img/montagem-avasus.png'),
        },
        {
          src: require('../assets/img/slide2.jpg'),
        },
        {
          src: require('../assets/img/slide4.jpg'),
        },
        {
          src: require('../assets/img/slide5.jpg'),
        },
        {
          src: require('../assets/img/slide6.jpg'),
        },
        {
          src: require('../assets/img/slide7.jpg'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.description {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  .underline {
    width: 110px;
    height: 2px;
    background-color: white;
    margin: 10px auto;
  }
}
.config {
  flex-direction: column;
  justify-content: center;
  padding: 40px 0 15px;
  .inside {
    width: 900px;
    margin: 0 auto;
    text-align: center;
  }
}
h1 {
  color: $cor-primaria;
  font-size: 29px;
}
</style>
