<template>
    <div class="welcome container">
        <form @submit.prevent="handleLogin">
            <div>
              <p> Don't have an account ? </p>
              <router-link to="/register"> Register </router-link>
            </div>

            <div>
              <h1> Login into your account : </h1>
              <input type="email" required placeholder="Your email" v-model="email">
              <input type="password" required placeholder="Your password" v-model="password">
            </div>

            <button type="submit">Login</button>
            <div class="error">{{ error }}</div>
        </form>

        <div>
            <router-link to="/password"> Forgot password ? </router-link>
        </div>
    </div>
</template>
  
<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: "SignupForm",
  components: {},
  data(){
    return {
      displayName: "",
      email : "", 
      password: "",
      error:""
    }
  },
  methods :{
    handleLogin() {
      firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(()=>{
          this.$router.push("/");
          this.error="";
          console.log(firebase.auth().currentUser.uid);
        }).catch(err => {
          if (err.code === 'auth/user-not-found') {
            this.error = "No account found with this email.";
          } else if (err.code === 'auth/wrong-password') {
            this.error = "Incorrect password.";
          } else {
            this.error = err.message;
          }
        })
    }
  }
};
</script>
  
<style scoped>
  .welcome.container {
  max-width: 500px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.welcome form div:first-child {
  margin-bottom: 1rem;
}

.welcome p {
  font-size: 0.95rem;
  color: #475569;
  margin-bottom: 0.5rem;
}

.welcome a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
}

.welcome a:hover {
  text-decoration: underline;
}

.welcome h1 {
  font-size: 1.5rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

.welcome input {
  display: block;
  width: 90%;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.welcome input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.welcome button {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.welcome button:hover {
  background-color: #2563eb;
}

.error {
  margin-top: 1rem;
  color: #dc2626;
  font-size: 0.9rem;
}

.welcome > div:last-child {
  margin-top: 1.5rem;
}

  </style>