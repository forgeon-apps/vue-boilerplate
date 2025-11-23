<!-- src/views/AboutView.vue -->
<template>
  <AppShell
    eyebrow="About this playground"
    title="Vue app wired for Forgeon."
  >
    <div class="back">
      <RouterLink to="/">← Back to home</RouterLink>
    </div>

    <p>
      This tiny service is a <strong>Vue 3</strong> playground used to test how
      Forgeon talks to SPA containers: health probes, timeouts, routes, and logs.
    </p>
    <p>
      It&apos;s not a production app – just a safe sandbox you can deploy, poke,
      and then replace with your real frontend once everything feels right.
    </p>

    <ul>
      <li>Boots quickly with no backend attached.</li>
      <li>Uses Vue Router for simple HTML routes.</li>
      <li>Perfect for basic container + routing diagnostics.</li>
    </ul>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'

export default {
  name: 'AboutView',
  components: { AppShell },
}
</script>
