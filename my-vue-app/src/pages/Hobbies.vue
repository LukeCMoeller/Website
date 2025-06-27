<template>
  <div class="hobbies-container">
    <h1>My Hobbies</h1>

    <!-- write seciton about intrests instead of passions-->
    
    <p class="intro"> Here's some stuff I love doing in my free time:</p>

    <div class="hobby-list">
      <div class="hobby-card">
        <img src="../assets/goomy.png" alt="Hiking" />
        <h3>hobby</h3>
        <p>Thing that i like to do and why i like to do it any why its good fo rme or my major or smeothign</p>
      </div>

      <div class="hobby-card">
        <img src="../assets/goomy.png" alt="Hiking" />
        <h3>hobby</h3>
        <p>Thing that i like to do and why i like to do it any why its good fo rme or my major or smeothign</p>
      </div>

      <div class="hobby-card">
        <img src="../assets/goomy.png" alt="Hiking" />
        <h3>hobby</h3>
        <p>Thing that i like to do and why i like to do it any why its good fo rme or my major or smeothign</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HobbiesPage',
}
</script>

<style scoped>
.hobbies-container {
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
}

.intro {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.hobby-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.hobby-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding: 1rem;
  width: 280px;
  text-align: center;
}

.hobby-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.75rem;
}

.hobby-card h3 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

.hobby-card p {
  font-size: 0.95rem;
  color: #444;
}
</style>
