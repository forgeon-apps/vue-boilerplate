<template>
  <AppShell
    eyebrow="API index"
    title="/v1 · Vue playground"
  >
    <div class="back">
      <RouterLink to="/">← Back to home</RouterLink>
    </div>

    <p>
      Like <code>/status</code>, this page renders a JSON-shaped payload
      so you can see what an API index might look like for the Vue
      playground.
    </p>

    <pre class="json-block">
<code>{
  "message": "Vue API v1 index",
  "service": "vue-playground",
  "routes": {
    "html": ["/", "/info", "/about", "/framework"],
    "health": ["/status"],
    "api": ["/v1"]
  }
}</code>
    </pre>
  </AppShell>
</template>

<script>
import AppShell from '../components/AppShell.vue'

export default {
  name: 'V1View',
  components: { AppShell },
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
