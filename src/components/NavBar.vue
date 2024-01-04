<template>
  <ul class="flex">
    <li><router-link to="/">Início</router-link></li>
    <li><router-link to="/">Sobre Nós</router-link></li>
    <li><router-link to="/modulos">Cursos</router-link></li>
    <li><router-link to="/parceiros">Parceiros</router-link></li>
    <li><router-link to="/transparencia">Transparência</router-link></li>
    <li><router-link to="/">Contato</router-link></li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  padding: 0;
  margin-left: 40px;
  margin-right: 20px;
}

li {
  margin-right: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 600;
  padding: 10px 0;

  &:hover {
    color: $cor-primaria;
  }

  &:first-child {
    color: $cor-botao;
  }

  &:last-child {
    margin-right: 0px;
  }
}
</style>
