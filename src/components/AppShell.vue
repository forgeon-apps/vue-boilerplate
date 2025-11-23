<!-- src/components/AppShell.vue -->
<template>
  <main class="card">
    <div v-if="eyebrow" class="eyebrow">
      {{ eyebrow }}
    </div>
    <h1 v-if="title" class="title">
      {{ title }}
    </h1>

    <slot />

    <div v-if="metaLeft || metaRight" class="meta">
      <span v-if="metaLeft">{{ metaLeft }}</span>
      <span v-if="metaRight" class="badge">{{ metaRight }}</span>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AppShell',
  props: {
    eyebrow: String,
    title: String,
    metaLeft: String,
    metaRight: String,
  },
}
</script>
