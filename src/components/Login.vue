<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="onLogin">
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const onLogin = () => {
  // console.log('Login attempt:', username.value, password.value);
};
</script>

<style>
.login-container {
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.login-button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
