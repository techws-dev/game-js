<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Game JS</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link">Login</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
