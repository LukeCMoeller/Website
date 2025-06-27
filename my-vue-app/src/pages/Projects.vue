<template>
  <div class="projects-wrapper">
        <div class="projects-header">
      <h1>Projects</h1>
    </div>

    <section class="project-entry">
      <img src="../assets/dmc.png" alt="Project 1 image" />
      <div class="project-info">
        <h2>DMCCR</h2>
        <p>Program that takes in an image and uses the Euclidean distance formula to calculate the closest DMC or cross stitch fabric value. All dmc values and names are stored in a text file and imported upon opening. After conversion, the save button will give you a text file off all the DMC colors and names along with the converted image. </p>
        <a href="https://github.com/LukeCMoeller/DMCCR" target="_blank">GitHub Link</a>
      </div>
    </section>
 
    <section class="project-entry">
      <img src="../assets/cookie.png" alt="Project 2 image" />
      <div class="project-info">
        <h2>Cookie Cicker</h2>
        <p>A play on the game cookie clicker makign fun of the clicker genre. Every time you press the cookie your score goes up by 1. Once 10 seconds have passed a shoe drops. Now you must go down from whatever score you created to 0. Once opened the game loades from a file so progress cannot be reset unless that file is deleted.</p>
        <a href="https://github.com/LukeCMoeller/Cookie-Clicker" target="_blank">GitHub Link</a>
      </div>
    </section>

    <section class="project-entry">
      <img src="../assets/website.png" alt="Project 3 image" />
      <div class="project-info">
        <h2>Student Portal App</h2>
        <p>An website created as a group at K-State to replace the old professional program application along wiht other addons.</p>
        <a href="https://github.com/LukeCMoeller/student-portal-Fall-2024" target="_blank">GitHub Repo</a>
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
.project-entry {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2.5rem;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;

  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}


.project-entry:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.project-entry img {
  width: 150px;  /* was 120px */
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.project-info h2 {
  margin-top: 0;
  font-size: 1.5rem; /* was 1.3rem */
  margin-bottom: 0.75rem;
}

.project-info p {
  font-size: 1rem; /* was 0.95rem */
  color: #444;
  margin-bottom: 0.75rem;
}
.projects-header {
  max-width: 700px;
  margin: 0 auto 2rem auto; /* centers it like the project cards */
}
</style>