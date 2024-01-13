<template>
  <div v-if="curso" class="flex config">
    <v-parallax height="250" :src="curso.capa" scale="1">
      <div class="parallax">
        <BreadCrumbs :items="items" style="color: white; margin-top: 18px" />
        <h1>{{ curso.titulo }}</h1>
        <h2>{{ curso.parceiros }}</h2>
      </div>
    </v-parallax>

    <div class="inside">
      <h1>Informações gerais do Curso</h1>
      <CourseDetails :curso="curso" :show-date="true" />
      <h2>Sobre o curso</h2>
      <p class="justify">{{ curso.sobre }}</p>

      <h2 v-if="curso.objetivo_geral || curso.objetivo_especifico">
        Objetivos
      </h2>
      <div class="justify" v-if="curso.objetivo_geral">
        <p>Objetivo Geral</p>
        <p>{{ curso.objetivo_geral }}</p>
      </div>

      <div class="justify" v-if="curso.objetivo_especifico">
        <p>Objetivo Específicos</p>
        <p>{{ curso.objetivo_especifico }}</p>
      </div>

      <h2 v-if="curso.recursos_educacionais">Recursos educacionais</h2>
      <div v-if="curso.recursos_educacionais">
        <p style="text-align: center">{{ curso.recursos_educacionais }}</p>
      </div>

      <h2>Créditos</h2>
      <div v-if="curso.creditos" class="flex galeria">
        <v-img
          v-for="(credito, index) in curso.creditos"
          :key="index"
          :src="credito.capa"
          :alt="credito.titulo"
          class="curso-imagem"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs.vue';
import CourseDetails from '@/components/CourseDetails.vue';
import { obterCursoPorId } from '@/services/cursosService';

export default {
  components: {
    BreadCrumbs,
    CourseDetails,
  },
  data: () => ({
    curso: null,
    items: [
      {
        title: 'Início',
        disabled: false,
        to: { name: 'home' },
      },
      {
        title: 'Cursos',
        disabled: false,
        to: { name: 'modulos' },
      },
      {
        title: 'Módulos',
        disabled: false,
        to: { name: 'modulos' },
      },
      {
        title: '',
        disabled: true,
      },
    ],
  }),
  async created() {
    try {
      this.curso = await obterCursoPorId(this.$route.params.id);
      this.items[3].title = this.curso.titulo;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.config {
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
  .inside {
    display: flex;
    flex-direction: column;
    width: 900px;
    margin: 0 auto;
    margin-top: 30px;
    gap: 30px;
    h1,
    h2 {
      text-align: center;
      color: #d2202c;
    }
  }
  .parallax {
    width: 900px;
    margin: 0 auto;
    text-align: center;
    h1 {
      text-align: left;
      color: $white;
      font-size: 24px;
      margin-bottom: 18px;
      padding: 0 10px;
      min-height: 72px;
    }
    h2 {
      @extend h1;
      font-size: 18px;
      font-weight: 100;
      min-height: 54px;
    }
  }
}
:deep(.v-parallax--active > .v-img__img) {
  filter: brightness(50%);
}
.galeria {
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 40px;
  .curso-imagem {
    flex: 0 0 25%;
  }
}
.justify {
  text-align: justify;
}
.justify p:first-child {
  font-weight: bold;
  margin-bottom: 10px;
}

@media only screen and (min-width: 768px) and (max-width: 919px) {
  .config {
    .inside,
    .parallax {
      width: 750px;
    }
  }
  .galeria {
    padding: 0 30px;
  }
}

@media only screen and (max-width: 767px) {
  .config {
    .inside,
    .parallax {
      width: 460px;
    }
    .inside {
      h1 {
        font-size: 26px;
      }
      h2 {
        font-size: 22px;
      }
    }
    .parallax {
      h1 {
        font-size: 20px;
      }
      h2 {
        font-size: 14px;
      }
    }
  }
  .galeria {
    .curso-imagem {
      flex: 0 0 50%;
    }
  }
}

@media only screen and (max-width: 467px) {
  .config {
    .inside,
    .parallax {
      width: 360px;
    }
    .inside {
      h1 {
        font-size: 24px;
      }
      h2 {
        font-size: 20px;
      }
    }
    .parallax {
      h1 {
        font-size: 18px;
      }
      h2 {
        font-size: 14px;
      }
    }
  }
}
</style>
