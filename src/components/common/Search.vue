<template>
    <div class="rounded-xl bg-white/70 backdrop-blur-sm w-full max-w-[920px] p-4 mx-auto shadow-lg"> 
        <form action="" class="flex items-stretch gap-3">
            <div class="flex items-center flex-1 gap-2 px-3 bg-white border border-gray-200 rounded-lg">
                <span class="text-gray-500 mdi mdi-map-marker mdi-24px"></span>
                <input type="text" class="w-full p-3 text-black bg-transparent outline-none" placeholder="地點" required>
            </div>
            <div class="flex items-center flex-1 gap-2 px-3 bg-white border border-gray-200 rounded-lg">
                <span class="text-gray-500 mdi mdi-calendar-month mdi-24px"></span>
                <input type="date" class="w-full p-3 text-black bg-transparent outline-none cursor-pointer" required>
            </div>
            <div class="flex items-center flex-1 gap-2 px-3 bg-white border border-gray-200 rounded-lg">
                <span class="text-gray-500 mdi mdi-account mdi-24px"></span>
                <input type="number" min="1" class="w-full p-3 text-black bg-transparent outline-none" placeholder="人數">
            </div>
            <button class="px-8 bg-[#6C51E2] hover:bg-[#5842b3] transition-colors rounded-lg text-white font-medium whitespace-nowrap">Search</button>
        </form>
    </div>
</template>

<script setup lang="ts" name="Search">
</script>