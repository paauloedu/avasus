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
    img {
      margin-right: 40px;
    }
  }
  .flex {
    justify-content: center;
  }
}
</style>
