<template>
  <div class="copyright">
    <span class="flex">2022 © LAIS (HUOL). Todos os direitos reservados</span>
  </div>
</template>

<style lang="scss" scoped>
.copyright {
  background-color: $cor-terciaria;
  padding: 15px 0;
  font-size: 15px;
  span {
    color: $white;
    justify-content: center;
  }
}

@media only screen and (max-width: 467px) {
  .copyright {
    .flex {
      font-size: 12px;
    }
  }
}
</style>
