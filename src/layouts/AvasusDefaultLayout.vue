<template>
  <TheHeader />
  <router-view style="padding-top: 67px"></router-view>
  <TheFooter />
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
