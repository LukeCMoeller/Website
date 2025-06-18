<template>
  <div class="projects-wrapper">
    <h1>Projects</h1>
    <p class="intro">Some things I've made or worked on recently:</p>

    <section class="project-entry">
      <img src="../assets/goomy.png" alt="Project 1 image" />
      <div class="project-info">
        <h2>cross stitch thing</h2>
        <p>descritpion of that</p>
        <a href="https://github.com/yourusername/weather-app" target="_blank">GitHub Link</a>
      </div>
    </section>

    <section class="project-entry">
      <img src="../assets/goomy.png" alt="Project 2 image" />
      <div class="project-info">
        <h2>video game i made?</h2>
        <p>desciritpin of that</p>
        <a href="https://yourliveproject.com/studentportal" target="_blank">GitHub Link</a>
      </div>
    </section>

    <section class="project-entry">
      <img src="../assets/goomy.png" alt="Project 3 image" />
      <div class="project-info">
        <h2>A Third THing</h2>
        <p>Everythign is better in threes</p>
        <a href="https://github.com/yourusername/discord-bot" target="_blank">GitHub Repo</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
}
</script>

<style scoped>
.projects-wrapper {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
}

.intro {
  color: #555;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.project-entry {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1.5rem;
}

.project-entry img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.project-info {
  flex: 1;
}

.project-info h2 {
  margin-top: 0;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.project-info p {
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 0.5rem;
}

.project-info a {
  font-weight: bold;
  color: #1e88e5;
  text-decoration: none;
}
</style>
