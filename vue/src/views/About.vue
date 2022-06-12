<script setup>
import AppHeader from "@/components/AppHeader.vue";
</script>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};

</script>

<template>
  <main class="about">
    <AppHeader />
    {{ count }}
    <button @click="increment">Inc</button>
    <button @click="decrement">Dec</button>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
