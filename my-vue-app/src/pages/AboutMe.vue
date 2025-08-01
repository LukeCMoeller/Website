<template>
  <div style="padding: 2rem">
    <div class="profile-card">
      <img class="profile-pic" :src="profilePic" alt="Profile Picture" />

      <div class="bio-section">
        <h2>Luke Moeller</h2>
        <p class="short-bio">
        Computer science student at K-State with a passion for getting hands. Loyal crewmember at Raising Canes. 
        </p>

        <ul style="list-style: none">
          <li><strong>Age:</strong> 22</li>
          <li><strong>School:</strong> Kansas State University</li>
          <li><strong>Major:</strong> Bachelors in Computer Science</li>
          <li><strong>Location:</strong> Overland Park</li>
        </ul>

        <a
          href="../public/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="resume-button"
        >
          📄 View My Resume
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import profilePic from '../assets/portrat.jpg'

export default {
  name: 'ProfilePage',
  data() {
    return {
      profilePic
    }
  }
}
</script>

<style scoped>
.profile-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  text-align: center;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.resume-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.resume-button:hover {
  background-color: #357ab8;
}

</style>
