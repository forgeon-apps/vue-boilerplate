<!-- src/App.vue -->
<template>
  <div class="app-root">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.app-root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: radial-gradient(circle at top, #111 0, #050505 55%);
  color: #f5f5f5;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    sans-serif;
}
</style>
