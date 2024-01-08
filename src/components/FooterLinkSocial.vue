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
      <!-- TODO: Mudar o icon do facebook -->
      <div>
        <h2>Redes Sociais</h2>
        <ul class="redes">
          <li>
            <a href="https://www.facebook.com/LAIS.HUOL" target="_blank"
              ><v-icon icon="mdi-facebook"></v-icon
            ></a>
          </li>
          <li>
            <a href="https://twitter.com/laishuol" target="_blank"
              ><v-icon icon="mdi-twitter"></v-icon
            ></a>
          </li>
          <li>
            <a href="https://www.instagram.com/laishuol/" target="_blank"
              ><v-icon icon="mdi-instagram"></v-icon
            ></a>
          </li>
        </ul>
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
.redes {
  display: inline-flex;
  gap: 50%;
}

@media only screen and (max-width: 550px) {
  .links-redes {
    .inside {
      flex-direction: column;
      align-items: center;
      gap: 20px;
      img {
        display: none;
      }
    }
  }
  .links {
    padding-right: 0px;
    a {
      font-size: 18px;
    }
    ul li {
      text-align: center;
    }
  }
}

@media only screen and (max-width: 767px) {
}
</style>
