<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function authenticate() {
  console.log(email.value)
  console.log(password.value)
}
</script>

<template>
  <main class="login">
    <h1>Login</h1>

    <div class="card col-lg-6">
      <div class="card-body">
        <form @submit.prevent="authenticate">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="text" v-model="email" id="email" class="form-control">
          </div>
          
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" v-model="password" id="password" class="form-control">
          </div>
          
          <div class="mb-3">
            <button type="submit" class="btn btn-primary">
              Authenticate
            </button>
          </div>
          
          <router-link to="/register">New user</router-link>
        </form>
      </div>
    </div>
  </main>
</template>

<style>
</style>
