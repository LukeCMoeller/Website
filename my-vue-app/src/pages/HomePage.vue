<template>
  <div>
    <section class="intro">
      <h1>WE STAY HERE WINNING</h1>
    </section>

    <section class="main-content">

      <ProfilePage />

      <div class="extra-sections">

        <div class="card">
          <h3>🚀 Projects</h3>
          <ul>
            <li>DMCCR – DMC color recommender</li>
            <li>Cookie Cicker – Video Game made in MonoGame</li>
            <li>Student Portal app – explination</li>
          </ul>
        </div>


        <div class="card">
          <h3>🛠️ Skills</h3>
          <p>stuff here like vue and stuff</p>
        </div>


        <div class="card">
          <h3>📬 Connect</h3>
          <p>Email: lcmoeller@ksu.edu</p>
          <p><a href="https://github.com/LukeCMoeller" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/luke-moeller57/" target="_blank">LinkedIn</a></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProfilePage from './AboutMe.vue'

export default {
  name: 'HomePage',
  components: {
    ProfilePage
  }
}
</script>

