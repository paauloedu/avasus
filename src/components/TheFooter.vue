<template>
  <div id="footer">
    <FooterRealizacao />
    <FooterLinkSocial />
    <FooterCopyright />
  </div>
</template>

<script>
import FooterRealizacao from './FooterRealizacao.vue';
import FooterLinkSocial from './FooterLinkSocial.vue';
import FooterCopyright from './FooterCopyright.vue';

export default {
  components: {
    FooterRealizacao,
    FooterLinkSocial,
    FooterCopyright,
  },
};
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
}

@media only screen and (max-width: 767px) {
}
</style>
