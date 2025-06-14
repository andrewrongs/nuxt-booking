<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-200 px-6">
    <div class="max-w-md text-center">
      <div class="text-blue-600 mb-4">
        <svg class="mx-auto w-20 h-20" fill="none" stroke="currentColor" stroke-width="1.5"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z">
          </path>
        </svg>
      </div>
      <h1 class="text-5xl font-extrabold text-gray-800 mb-4">404</h1>
      <p class="text-xl text-gray-700 font-medium">找不到這個頁面</p>
      <p class="text-gray-500 mt-2 mb-6">您輸入的網址不存在或已被移除，請確認網址是否正確。</p>
      <NuxtLink to="/" class="inline-block bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition">返回首頁</NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Page Not Found",
  meta: [
    {
      name: "description",
      content: "Page Not Found",
    },
  ],
  layout: false,
});
</script>
