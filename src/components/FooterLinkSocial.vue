<template>
  <div class="links-redes">
    <div class="inside flex">
      <img
        style="height: 100%"
        src="../assets/img/lais-descricao.png"
        alt="Laboratório de Inovação Tecnologia em Saúde"
      />
      <div class="links">
        <h2>Links Úteis</h2>
        <ul>
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/">Sobre Nós</router-link></li>
          <li><router-link to="/modulos">Módulos</router-link></li>
          <li><router-link to="/parceiros">Parceiros</router-link></li>
          <li><router-link to="/transparencia">Transparência</router-link></li>
        </ul>
      </div>
      <div class="redes">
        <h2>Redes Sociais</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  margin-bottom: 10px;
  font-size: 22px;
}
.links-redes {
  color: $white;
  background-color: $cor-secundaria;
  .inside {
    max-width: 1200px;
    justify-content: space-around;
    padding: 40px 0;
    margin: 0 auto;
  }
}
.links {
  padding-right: 37px;
  li {
    margin-bottom: 5px;
  }
  a {
    font-size: 15px;
  }
}
</style>
