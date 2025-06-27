<template>
  <div class="home-wrapper">
    <section class="intro">
      <h1>WE STAY HERE WINNING</h1>
      <p class="tagline">fix the spacing and style here</p>
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

<style scoped>
.home-wrapper {
  padding: 2rem;
  font-family: sans-serif;
  background-color: #f9f9f9;
}

.intro {
  text-align: center;
}

.tagline {
  font-size: 1.2rem;
  color: #777;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.extra-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
}

.card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
}
.card h3 {
  margin-bottom: 0.8rem;
}
.card a {
  color: #4a90e2;
  text-decoration: none;
}
.card a:hover {
  text-decoration: underline;
}
</style>
