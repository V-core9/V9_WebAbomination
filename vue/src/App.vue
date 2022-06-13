<script setup>
import { RouterView } from "vue-router";

import SvgCursor from "@/components/SvgCursor.vue";

import { useAuthStore } from './stores/auth';
import { useSettingsStore } from './stores/settings';
import { useCursorStore } from './stores/cursor';
const auth = useAuthStore();
const settings = useSettingsStore();
const cursor = useCursorStore();


window.stores = { auth, settings, cursor };


window.addEventListener('resize', settings.resize);

window.addEventListener('blur', () => settings.setFocus(false));
window.addEventListener('focus', () => settings.setFocus(true));

window.addEventListener('mousemove', (event) => cursor.setPosition(event.clientX, event.clientY));

window.addEventListener('mousedown', (event) => {
  console.log(event);
});

</script>

<template >
  <RouterView :class="'fontSize_' + settings.fontSize" />
  <SvgCursor />
</template>


<style>
@import "@/assets/base.css";

* {
  cursor: none;
}

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
