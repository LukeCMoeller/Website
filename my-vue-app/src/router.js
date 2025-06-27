
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/HomePage.vue'
import AboutMe from './pages/AboutMe.vue'
//import Hobbies from './pages/Hobbies.vue'
import School from './pages/School.vue'
import Projects from './pages/Projects.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/AboutMe', component: AboutMe },
  //{ path: '/Hobbies', component: Hobbies },
  { path: '/School', component: School },
  { path: '/Projects', component: Projects },

];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;

