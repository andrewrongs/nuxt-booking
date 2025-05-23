<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="mb-6 text-center">
            <h1 class="text-6xl font-bold text-gray-800">404</h1>
            <p class="mt-2 text-xl text-gray-600">查無頁面</p>
            <p class="mb-6 text-gray-500">您訪問的頁面不存在或已移除。</p>
            <NuxtLink to="/" class="text-blue-500 hover:text-blue-600">返回首頁</NuxtLink>
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
