import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import PhpComponent from './components/PhpComponent.vue';
import NodeComponent from './components/NodeComponent.vue';
import DyanmicComponent from './components/dyanmicComponent.vue';


const routes = [
  { path: '/', component: HomeComponent, name: 'HomeComponent' },
  { path: '/about', component: PhpComponent, name: 'PhpComponent' },
  { path: '/php', component: NodeComponent, name: 'NodeComponent' },
  { path: '/user/:name', component: DyanmicComponent, name: 'DyanmicComponent' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
