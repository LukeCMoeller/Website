<template>
  <div class="profile-container">
    <div class="profile-card">
      <img class="profile-pic" :src="profilePic" alt="Profile Picture" />

      <div class="bio-section">
        <h2>Luke Moeller</h2>
        <p class="short-bio">
          talk abou tme what im into what im workign on just generic description
        </p>

        <ul class="details-list">
          <li><strong>Age:</strong> 22</li>
          <li><strong>School:</strong> Kansas State University</li>
          <li><strong>Major:</strong> Computer Science</li>
          <li><strong>Location:</strong> IDK if i need</li>
        </ul>
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
.profile-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.profile-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
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

.bio-section h2 {
  margin-bottom: 0.5rem;
}

.short-bio {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.details-list {
  list-style: none;
  padding: 0;
  font-size: 0.95rem;
  color: #333;
}

.details-list li {
  margin: 0.3rem 0;
}
</style>
