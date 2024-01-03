import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import EducationalModules from '../views/EducationalModules.vue';
import CourseInfo from '../views/CourseInfo.vue';
import OurPartners from '../views/OurPartners.vue';
import TransparecyPage from '../views/TransparecyPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/modulos',
    name: 'modulos',
    component: EducationalModules,
  },
  {
    path: '/cursos/:id',
    name: 'cursos-detalhes',
    component: CourseInfo,
    props: true,
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: CourseInfo,
  },
  {
    path: '/parceiros',
    name: 'parceiros',
    component: OurPartners,
  },
  {
    path: '/transparencia',
    name: 'transparencia',
    component: TransparecyPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
