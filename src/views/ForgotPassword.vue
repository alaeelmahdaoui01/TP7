<template>
    <div class="welcome container">
        <form @submit.prevent="resetPassword ">
            <div>
              Back to 
              <router-link to="/login"> Login </router-link>
            </div>

            <div>
              <h1> Reset Password </h1>
              <p>  Enter Email to reset : </p>
              <input type="email" required placeholder="Your email" v-model="email">
            </div>

            <button type="submit">Reset</button>

            <div class="message">{{ message }}</div>

        </form>

    </div>
  </template>
  
<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: "ResetPassword",
  components: {},
  data(){
    return {
      email : "", 
      message:"",
    }
  },
  methods :{
    resetPassword(){
      firebase.auth().sendPasswordResetEmail(this.email).then(()=>{
        this.message="If your account exists, you will receive an email"
      }).catch(err => {
          this.message=err.message
        })
    }
  }
};

</script>
  
<style scoped>
.welcome.container {
  max-width: 520px;
  margin: 4rem auto;
  padding: 2.5rem 2rem;
  background: #ffffff;
  border-radius: 1.25rem;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  text-align: center;
  transition: all 0.3s ease-in-out;
}

.welcome h1 {
  font-size: 1.75rem;
  color: #1e293b;
  margin-bottom: 1rem;
}

.welcome p {
  font-size: 0.95rem;
  color: #475569;
  margin-bottom: 1rem;
}

.welcome input {
  display: block;
  width: 90%;
  padding: 0.8rem 1rem;
  margin-bottom: 1.2rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.6rem;
  font-size: 1rem;
  background-color: #f9fafb;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.welcome input:focus {
  outline: none;
  border-color: #3b82f6;
  background-color: #ffffff;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.welcome button {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 0.5rem;
}

.welcome button:hover {
  background-color: #2563eb;
  transform: translateY(-1px);
}

.welcome.container a[href="/login"] {
  color: #2563eb; /* Example: Green color */
  text-decoration: none;
}

.welcome.container a[href="/login"]:hover {
  color: #2563eb; /* Darker green on hover */
  text-decoration: underline;
}

.message {
  font-weight : bold ;
  color : #08286b;
}
</style>