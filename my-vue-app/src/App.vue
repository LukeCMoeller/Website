
<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow p-4">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from  './components/Layout/Header.vue'
//import AboutMe from './pages/AboutMe.vue'
//import Hobbies from './pages/Hobbies.vue'
import School from './pages/School.vue'
import Homepage from './pages/HomePage.vue'
import Projects from './pages/Projects.vue'
export default {
  components: {
    Header,
    Homepage,
    School,
    //Hobbies,
    //AboutMe,
    Projects,
  }
}
</script>
