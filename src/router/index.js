import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';



// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login }
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
