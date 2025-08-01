<template>
  <div class="projects-wrapper">
    <br> <br> <br> <br> <br>
    <section class="project-entry">
      <img src="../assets/website.png" alt="Project 3 image" />
      <div class="project-info">
        <h2>Student Portal App</h2>
        <p>A large group project worked on over the course of a year. this website was designed by my group at K-State to replace the old professional program application along with other addons</p>
        <a href="https://github.com/LukeCMoeller/student-portal-Fall-2024" target="_blank">GitHub Repo</a>
      </div>
    </section>
    
    <section class="project-entry">
      <img src="../assets/dmc.png" alt="Project 1 image" />
      <div class="project-info">
        <h2>DMCCR</h2>
        <p>A program that takes in an image and uses the Euclidean distance formula to calculate the closest DMC or cross stitch fabric value. All dmc values and names are stored in a text file and imported upon opening. After conversion, the save button will give you a text file off all the DMC colors and names along with the converted image. </p>
        <a href="https://github.com/LukeCMoeller/DMCCR" target="_blank">GitHub Link</a>
      </div>
    </section>
 
    <section class="project-entry">
      <img src="../assets/cookie.png" alt="Project 2 image" />
      <div class="project-info">
        <h2>Cookie Cicker</h2>
        <p>A play on the game "Cookie Clicker" that makes fun of the clicker genre. Every time you press the cookie your score goes up by one. Once 10 seconds have passed a shoe drops. Upon clicking, you must go down from whatever score you created to 0. Once opened, the game loads from a file so that progress cannot be reset unless that file is deleted.</p>
        <a href="https://github.com/LukeCMoeller/Cookie-Clicker" target="_blank">GitHub Link</a>
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
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #823ddd; 
  transition: box-shadow 0.3s ease;

  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.project-entry:hover {
  box-shadow: 0 6px 16px rgba(130, 61, 221, 0.4); /* subtle purple glow on hover */
}

.project-entry img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.project-info h2 {
  margin-top: 0;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #333;
}

.project-info p {
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.75rem;
}

.projects-header {
  max-width: 700px;
  margin: 0 auto 2rem auto;
  text-align: center;
  font-weight: 600;
  color: #333;
}

</style>