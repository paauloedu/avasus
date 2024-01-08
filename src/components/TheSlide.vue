<template>
  <v-carousel cycle interval="5000" :height="getChartHeight()">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
      <div v-if="i === 0" class="description">
        <img src="@/assets/img/avasus.png" />
        <div class="underline"></div>
        <img src="@/assets/img/avasus-descricao.png" />
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
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
  methods: {
    getChartHeight() {
      if (window.innerWidth >= 920) {
        return 800;
      } else if (window.innerWidth >= 468) {
        return 500;
      } else {
        return 250;
      }
    },
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

@media only screen and (max-width: 767px) {
  //TODO: Remover os botões > e <
  .description {
    img {
      width: 400px;
    }
  }
}

@media only screen and (max-width: 467px) {
  .description {
    img {
      width: 260px;
    }
  }
}
</style>
