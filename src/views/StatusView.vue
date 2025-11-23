<template>
  <AppShell
    eyebrow="Health"
    title="/status · Vue playground"
  >
    <div class="back">
      <RouterLink to="/">← Back to home</RouterLink>
    </div>

    <p>
      This is a <strong>frontend-only</strong> playground, so this page
      shows the status payload as formatted JSON instead of a raw API
      response. In Forgeon, a real backend service would return this
      as <code>application/json</code>.
    </p>

    <pre class="json-block">
<code>{
  "status": "ok",
  "service": "vue-playground",
  "runtime": "browser",
  "framework": "vue-3",
  "timestamp": "{{ timestamp }}"
}</code>
    </pre>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'

export default {
  name: 'StatusView',
  components: { AppShell },
  data() {
    return {
      timestamp: new Date().toISOString(),
    }
  },
}
</script>

<style scoped>
.back {
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.back a {
  color: #9ca3af;
  text-decoration: none;
}

.back a:hover {
  color: #e5e5e5;
  text-decoration: underline;
}

p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #9ca3af;
  margin-bottom: 1rem;
}

.json-block {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #222;
  background: #050505;
  color: #e5e5e5;
  font-family: SFMono-Regular, ui-monospace, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 0.85rem;
  overflow-x: auto;
}
</style>
