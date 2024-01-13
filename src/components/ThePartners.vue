<template>
  <ul class="parceiros">
    <li>
      <p>Governo do RN</p>
      <span>Governo do Estado do Rio Grande do Norte.</span>
    </li>
    <li>
      <p>SESAP</p>
      <span>Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</span>
    </li>
    <li>
      <p>UFRN</p>
      <span>Universidade Federal do Rio Grande do Norte.</span>
    </li>
    <li>
      <p>HUOL</p>
      <span
        >Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade
        Federal do Rio Grande do Norte).
      </span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.parceiros {
  display: flex;
  border-radius: 15px;
  padding: 15px;
  background-color: $cinza-claro;
  margin-bottom: 40px;
  * {
    flex: 1;
  }
  p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  span {
    font-size: 14px;
    font-weight: bold;
    color: $cor-botao;
  }
}

@media only screen and (max-width: 767px) {
  .parceiros {
    flex-direction: column;
  }
}

@media only screen and (max-width: 467px) {
  .parceiros li {
    margin-bottom: 10px;
  }
}
</style>
