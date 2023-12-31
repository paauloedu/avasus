<template>
  <div class="flex">
    <div v-for="(item, index) in items" :key="index" class="curso">
      <v-img
        :src="item.image"
        class="curso-imagem"
        height="90"
        width="90"
        cover
      ></v-img>

      <v-card-title>
        {{ item.title }}
        <v-card-subtitle>
          {{ item.subtitle }}
        </v-card-subtitle>
      </v-card-title>

      <v-row align="center">
        <v-rating v-model="item.stars" readonly></v-rating>
      </v-row>

      <v-card-actions>
        <v-btn color="primary" @click="handleButtonClick(item)"
          >Ver Módulo</v-btn
        >
      </v-card-actions>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: require('../assets/img/montagem-avasus.png'),
          title: 'Item 1',
          subtitle: 'Subtítulo do Item 1',
          stars: 4,
        },
        {
          image: require('../assets/img/slide5.jpg'),
          title: 'Item 2',
          subtitle: 'Subtítulo do Item 2',
          stars: 3,
        },
        {
          image: require('../assets/img/slide7.jpg'),
          title: 'Item 3',
          subtitle: 'Subtítulo do Item 3',
          stars: 5,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.flex {
  flex-direction: column;
}
.curso {
  display: flex;
  flex-direction: row;
  background-color: $cinza-claro;
  border-radius: 15px;
  padding: 15px;
  gap: 10px;
  .curso-imagem {
    border-radius: 15px;
  }
}
</style>
