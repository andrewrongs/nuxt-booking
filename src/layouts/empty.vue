<template>
  <ClientOnly>
    <div :class="`${colorMode.value}`">
      <slot />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>

<style>
.dark {
  background-color: #1a1a1a;
  color: #f7fafc;
}

.light {
  background-color: #f7fafc;
  color: #1a1a1a;
}
</style>
