<!-- src/views/HomeView.vue -->
<template>
  <AppShell
    eyebrow="Forgeon · Vue playground"
    title="Vue boilerplate, ready for deploy tests."
    meta-left="Try deploying this to Forgeon as a simple Vue playground."
    meta-right="localhost:5173"
  >
    <div class="grid">
      <div>
        <p>
          This app is a small <strong>Vue 3</strong> playground you can use to test
          routing, HTML rendering, and container wiring inside Forgeon or on your
          local machine.
        </p>

        <div class="pill-row">
          <div class="pill">
            <strong>GET</strong> /
          </div>
          <div class="pill">Vue 3 · SPA</div>
          <div class="pill">Playground mode (no API / DB)</div>
        </div>
      </div>

      <div>
        <div class="links">
        <RouterLink to="/info">
            /info
            <span>– service overview & Forgeon context</span>
        </RouterLink>
        <RouterLink to="/about">
            /about
            <span>– what this boilerplate is for</span>
        </RouterLink>
        <RouterLink to="/framework">
            /framework
            <span>– stack: Vue, Vite, etc.</span>
        </RouterLink>
        <RouterLink to="/status">
            /status
            <span>– JSON-like health endpoint</span>
        </RouterLink>
        <RouterLink to="/v1">
            /v1
            <span>– JSON-like API index</span>
        </RouterLink>
        </div>
      </div>
    </div>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'

export default {
  name: 'HomeView',
  components: { AppShell },
}
</script>
