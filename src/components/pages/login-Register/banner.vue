<template>
    <div class="xl:w-[70%] relative bg-white">
        <NuxtImg src="https://bookingimg.s3.us-east-1.amazonaws.com/Login/login.jpg" alt="Login Image"
            class="hidden md:block w-[95%] max-h-screen object-cover xl:object-[center_70%]" />
        <NuxtLink :to="{ name: 'index' }" class="absolute w-32 top-8 left-10">
            <NuxtImg src="/logo.svg" alt="Logo" class="w-32 top-8 left-10" />
        </NuxtLink>
        <p class="hidden xl:block text-black text-5xl font-bold absolute top-64 left-20 w-[500px] tracking-wide">
            An ideal hotel makes a wonderful Trip
        </p>
        <p class="hidden xl:block absolute text-sm top-96 left-20 text-zinc-500 w-[500px]">
            Discover your dream destination and hotel on ALOHA.com
        </p>
    </div>
</template>

<script setup lang="ts">

</script>