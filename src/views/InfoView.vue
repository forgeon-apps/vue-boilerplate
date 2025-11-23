<!-- src/views/InfoView.vue -->
<template>
  <AppShell
    eyebrow="Service info"
    title="vue-playground · Forgeon-ready frontend"
  >
    <div class="back">
      <RouterLink to="/">← Back to home</RouterLink>
    </div>

    <div class="grid">
      <div>
        <p>
          This instance exposes a couple of HTML routes so you can quickly check that
          the Vue app bundles correctly and Forgeon is talking to the container.
        </p>

        <ul>
          <li>Confirm that the dev server / runtime is reachable.</li>
          <li>Verify routing works through Forgeon.</li>
          <li>Inspect logs and latency while navigating pages.</li>
        </ul>
      </div>

      <div>
        <div class="links">
          <RouterLink to="/">/ <span>– landing page</span></RouterLink>
          <RouterLink to="/framework">
            /framework <span>– stack overview</span>
          </RouterLink>
          <a
            href="https://forgeon.io"
            target="_blank"
            rel="noreferrer"
          >
            forgeon.io
            <span>– learn more about the platform</span>
          </a>
        </div>
      </div>
    </div>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'

export default {
  name: 'InfoView',
  components: { AppShell },
}
</script>
