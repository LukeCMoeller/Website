<template>
  
  <div>
    <section class="main-content">

      <ProfilePage />

      <div class="extra-sections">

        <div class="card">
          <h3>🚀 Projects</h3>
          <ul>
            <li>Student Portal app – New student portal app for KSU made as a group project</li>
            <li>DMCCR – DMC color recommender</li>
            <li>Cookie Cicker – Video Game made in MonoGame</li>
          </ul>
        </div>


        <div class="card">
          <h3>🛠️ Skills</h3>
          <p>C#, C, Python, Vue, HTML, Vue, Discord, Monogame. <br> Worked with Git, Monogame, GDOT, Visual Studio</p>
        </div>
        <div class="card">
          <h3>🎯 Interests</h3>
          <ul>
            <li>Game development</li>
            <li>Embrodery</li>
            <li>Video Games</li>
            <li>Magic: The Gathering</li>
            <li>Music</li>
          </ul>
        </div>
              <div class="card">
          <h3>🏫 Classes</h3>
          <p>have not fully decided if i need this category here</p>>
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

