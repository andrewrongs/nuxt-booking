<template>
  <ClientOnly>
    <Switch
      :checked="colorMode.value === 'dark'"
      @click="toggleColorTheme"      
      class="relative inline-flex items-center h-5 transition-all duration-300 bg-gray-200 rounded-full shadow-inner cursor-pointer w-14 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      <span
        :class="[
          colorMode.value === 'dark' ? 'translate-x-8' : 'translate-x-1',
          'inline-flex items-center justify-center h-5 w-5 transform rounded-full bg-white transition-all duration-300 shadow-md hover:shadow-lg'
        ]"
      >
        <span 
          v-if="colorMode.value === 'light'"
          class="flex items-center justify-center text-yellow-500 transition-all duration-300 mdi mdi-white-balance-sunny mdi-18px hover:rotate-45"
        />
        <span 
          v-else
          class="flex items-center justify-center text-blue-400 transition-all duration-300 mdi mdi-moon-waning-crescent mdi-18px hover:-rotate-45"
        />
      </span>
    </Switch>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const toggleColorTheme = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
};
</script>
