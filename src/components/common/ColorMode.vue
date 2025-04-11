<template>
  <ClientOnly>
    <Switch
      :checked="colorMode.value === 'dark'"
      @click="toggleColorTheme"      
      class="relative inline-flex items-center h-6 bg-gray-200 rounded-full w-11 dark:bg-gray-700"
    >
      <span
        :class="[
          colorMode.value === 'dark' ? 'translate-x-6' : 'translate-x-1',
          'inline-flex items-center justify-center h-4 w-4 transform rounded-full bg-white transition'
        ]"
      >
        <span 
            v-if="colorMode.value === 'light'"
            class="flex items-center justify-center text-yellow-700 mdi mdi-white-balance-sunny mdi-5px"
          />
        <span 
          v-else
          class="flex items-center justify-center text-blue-400 mdi mdi-moon-waning-crescent mdi-10px"
        />
      </span>
    </Switch>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue';
const colorMode = useColorMode();

const toggleColorTheme = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
};
</script>
