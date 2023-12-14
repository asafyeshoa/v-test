import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import HelloWorld from '../components/HelloWorld.vue';
import HelloWorldTwo from '../components/HelloWorldTwo.vue';
import AppTest from '../components/AppTest.vue';


// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/HelloWorld', component: HelloWorld },
  { path: '/AppTest', component: AppTest },
  { path: '/HelloWorldTwo', component: HelloWorldTwo },
  // Add more routes as needed
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
