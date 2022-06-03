<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import LogoV from "@/components/LogoV.vue";

import { useAuthStore } from './stores/auth';
import { useSettingsStore } from './stores/settings';
const auth = useAuthStore();
const settings = useSettingsStore();


window.stores = { auth, settings };
</script>

<template>
  <header>
    <LogoV
      alt="Vue logo"
      class="logo"
    />

    <div class="wrapper">
      <h2>Hello {{ auth.email }}</h2>
      <h2>fontSize {{ settings.fontSize }}</h2>


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

  <RouterView />
</template>

<style scopped>
#app * {
  font-size: v-bind('settings.fontSize');
}
</style>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1em;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2em;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2em 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1em;
    font-size: 1em;

    padding: 1em 0;
    margin-top: 1em;
  }
}
</style>
