<template>
  <div class="home">
    <NavBar />
    <section class="welcome">
      <h1>Welcome to Forum App</h1>
      <p>Join the conversation. Share your thoughts. Learn something new.</p>
      <button>Start a Discussion</button>
    </section>

    <section class="recent-posts">
      <h2>Recent Discussions</h2>
      <ul>
        <li>
          <h3>How to learn Vue.js as a beginner?</h3>
          <p>Posted by Alice · 2 hours ago</p>
        </li>
        <li>
          <h3>Best programming podcasts?</h3>
          <p>Posted by Bob · 5 hours ago</p>
        </li>
        <!-- Add more previews -->
      </ul>
    </section>
  </div>
</template>


<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "HomeView",
  components: {NavBar},
  data(){}
};
</script>

<style scoped>
/* General page padding */
.home {
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8fafc; /* light gray */
  min-height: 100vh;
}

/* Welcome section styling */
.welcome {
  text-align: center;
  background-color: #e2e8f0; /* slate-200 */
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.welcome h1 {
  font-size: 2.5rem;
  color: #1e293b; /* slate-800 */
  margin-bottom: 1rem;
}

.welcome p {
  font-size: 1.1rem;
  color: #475569; /* slate-600 */
  margin-bottom: 1.5rem;
}

.welcome button {
  background-color: #3b82f6; /* blue-500 */
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.welcome button:hover {
  background-color: #2563eb; /* blue-600 */
}

/* Recent Discussions */
.recent-posts {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.recent-posts h2 {
  font-size: 1.8rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

.recent-posts ul {
  list-style: none;
  padding: 0;
}

.recent-posts li {
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 0;
}

.recent-posts li h3 {
  font-size: 1.2rem;
  margin: 0;
  color: #0f172a;
}

.recent-posts li p {
  color: #64748b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}



</style>