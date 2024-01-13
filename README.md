# AVASUS

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://www.ecma-international.org/ecma-262/6.0/) [![Vue.js](https://img.shields.io/badge/Vue.js-3.2.13-brightgreen)](https://vuejs.org/) [![Chart.js](https://img.shields.io/badge/Chart.js-2.9.3-blue)](https://www.chartjs.org/) [![Material Design Icons](https://img.shields.io/badge/MDI-7.1.96-orange)](https://materialdesignicons.com/)

Este projeto foi desenvolvido como parte da seleção de bolsistas para o Projeto "Desenvolvimento Científico e Tecnológico Aplicado a Esclerose Lateral Amiotrófica". O objetivo principal é implementar o front-end de uma plataforma para visualização de módulos educacionais, cursos, portal de transparência e informações sobre parceiros.

## Conteúdo

1. [🚀 Funcionalidades Principais](#funcionalidades-principais)
2. [📦 Instruções de Instalação](#instruções-de-instalação)
3. [📚 Dependências](#dependências)
4. [📝 Licença](#licença)

## 🚀 Funcionalidades Principais

### Tela Responsiva

O AVASUS é completamente responsivo, adaptando-se a diferentes dispositivos e tamanhos de tela.

[Desktop](https://github.com/paauloedu/avasus/raw/avasus-dev/src/assets/gif/desktop.gif) | [Tablet](https://github.com/paauloedu/avasus/raw/avasus-dev/src/assets/gif/tablet.gif) | [Celulares](https://github.com/paauloedu/avasus/raw/avasus-dev/src/assets/gif/mobile.gif)

<img src="https://github.com/paauloedu/avasus/raw/avasus-dev/src/assets/gif/mobile.gif" width="200">

### Gráficos Interativos

Utilizamos a biblioteca Chart.js para criar gráficos interativos, proporcionando uma visualização clara dos dados.

<img src="https://github.com/paauloedu/avasus/raw/avasus-dev/src/assets/gif/chart.gif" width="400">

### Padrões Vue.js

O projeto segue os [padrões](https://github.com/paauloedu/avasus/blob/avasus-dev/padr%C3%B5es.md) e boas práticas recomendados pelo Vue.js, garantindo uma estrutura coesa e manutenível.

## 📦 Instruções de Instalação

### Front-end

Para o front-end funcionar, siga os passos abaixo:

```bash
# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run serve
```

Acesse o front-end em http://localhost:8080.

### Back-end

```bash
# Clone o repositório
git clone https://github.com/lais-huol/edital-001-23-modulos-educacionais

# Navegue até o diretório do projeto
cd nome-do-projeto

# Instale as dependências
npm install

# Inicie o servidor
npm start
```

Com isso, a API estará disponível para acesso no endereço http://localhost:3004 podendo ser acessada externamente dentro da sua rede local pelo IP da sua máquina. Exemplo: http://192.168.0.13:3004.

## 📚 Dependências

Este projeto utiliza as seguintes dependências:

- [Vue](https://www.npmjs.com/package/vue): ^3.2.13
  - Framework JavaScript progressivo para construção de interfaces de usuário.
- [Vue Router](https://www.npmjs.com/package/vue-router): ^4.0.3
  - Roteador oficial para aplicações Vue.js, permitindo a navegação entre componentes.
- [Vuetify](https://www.npmjs.com/package/vuetify): ^3.4.9
  - Framework de componentes Vue.js para criar interfaces de usuário agradáveis e responsivas.
- [Axios](https://www.npmjs.com/package/axios): ^1.6.3
  - Cliente HTTP para fazer requisições à API do back-end.
- [Chart.js](https://www.npmjs.com/package/chart.js): ^2.9.3
  - Biblioteca para criar gráficos interativos no navegador.
- [Chartjs-chart-geo](https://www.npmjs.com/package/chartjs-chart-geo): ^2.1.0
  - Plugin para gráficos de mapa no Chart.js.
- [@mdi/font](https://www.npmjs.com/package/@mdi/font): ^7.1.96
  - Ícones Material Design.

## 📝 Licença

Este projeto é distribuído sob a [MIT © Paulo E. S. Reis](https://github.com/paauloedu/avasus/blob/avasus-dev/LICENSE) <a href="#top">🔝</a>
