import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mission from './views/Mission.vue';
import Services from './views/Services.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/mission',
      name: 'mission',
      component: Mission,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
  ],
});
