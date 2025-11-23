<!-- src/views/FrameworkView.vue -->
<template>
  <AppShell
    eyebrow="Stack"
    title="Built with Vue 3."
  >
    <div class="back">
      <RouterLink to="/">← Back to home</RouterLink>
    </div>

    <div class="grid">
      <div>
        <p>
          The app uses <strong>Vue 3</strong> with the Composition-friendly runtime
          and <strong>Vue Router</strong> for navigation. In playground mode it
          doesn&apos;t talk to any real backend – it&apos;s just here so Forgeon
          can flex container + routing muscles.
        </p>
      </div>

      <div>
        <div class="links">
          <RouterLink to="/info">
            /info <span>– service overview</span>
          </RouterLink>
          <RouterLink to="/about">
            /about <span>– playground details</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'

export default {
  name: 'FrameworkView',
  components: { AppShell },
}
</script>
