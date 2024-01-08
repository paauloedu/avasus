<template>
  <div class="realizacao">
    <div class="inside">
      <h2>Realização</h2>
      <div class="execucao flex">
        <img src="../assets/img/lais-logo.png" alt="" />
        <img src="../assets/img/ufrn.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.realizacao {
  background-color: $cor-primaria;
  .inside {
    max-width: 1200px;
    margin: 0 auto;
    padding: 25px 0;
  }
  h2 {
    text-align: center;
    color: white;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .execucao {
    margin: 0 auto;
  }
  .flex {
    justify-content: center;
    gap: 80px;
  }
}

@media only screen and (max-width: 767px) {
  .realizacao {
    .inside {
      max-width: 460px;
      .execucao img {
        width: 180px;
      }
    }
  }
}

@media only screen and (max-width: 467px) {
  .realizacao {
    .inside {
      max-width: 360px;
      .execucao img {
        width: 100px;
      }
    }
  }
}
</style>
