import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

//Vuetify e Mdi
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as icons from '@mdi/js';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    values: icons,
  },
});

createApp(App).use(router).use(vuetify).mount('#app');
