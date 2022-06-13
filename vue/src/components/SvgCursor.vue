<script setup>
import { useCursorStore } from '../stores/cursor';
const cursor = useCursorStore();
</script>

<template>
  <div class="cursor" :style="{ left: cursor.x + 'px', top: cursor.y + 'px' }"></div>
</template>

<style scoped>

.cursor {
  position: fixed;
  z-index: 100;
  width: 1em;
  height: 1em;
  border: 1px solid rgb(0, 189, 126);
  pointer-events: none;
  border-radius: 50%;
}

</style>
