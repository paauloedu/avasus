<template>
  <ul class="flex">
    <li>Início</li>
    <li>Sobre Nós</li>
    <li>Cursos</li>
    <li>Parceiros</li>
    <li>Transparência</li>
    <li>Contato</li>
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
