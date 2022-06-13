<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import LogoV from "@/components/LogoV.vue";

import { useAuthStore } from '../stores/auth';
const auth = useAuthStore();

</script>

<template>
  <header>
    <LogoV alt="Vue logo" class="logo" />

    <div class="wrapper" >
      <h2>Hello {{ auth.email }}</h2>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink v-if="auth.email == ''" to="/login">Login</RouterLink>
        <RouterLink v-if="auth.email == ''" to="/register">Register</RouterLink>
        <button v-if="auth.email != ''" @click="auth.logout">Logout</button>
      </nav>
    </div>
  </header>
</template>
