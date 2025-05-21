<template>
  <div class="min-h-screen bg-white flex flex-col xl:flex-row">
    <div class="xl:w-[70%] relative bg-white">
      <img src="/img/login.jpg" alt="Login Image" class="hidden md:block w-full max-h-screen object-cover xl:object-[center_70%]" />
      <img src="/img/logo-aloha.svg" alt="Logo" class="absolute top-8 left-10 w-32" />
      <p class="hidden xl:block text-black text-5xl font-bold absolute top-64 left-20 w-[500px] tracking-wide">
        An ideal hotel makes a wonderful Trip
      </p>
      <p class="hidden xl:block absolute text-sm top-96 left-20 text-zinc-500 w-[500px]">
        Discover your dream destination and hotel on ALOHA.com
      </p>
    </div>

    <div class="p-10 w-full max-w-md pt-20 xl:w-[30%] relative md:absolute xl:static
    md:top-96 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 xl:translate-x-0 xl:translate-y-0 xl:flex xl:items-center">
      <div class="w-full">
        <h2 class="text-4xl font-bold text-left mb-6 text-black font-sans">Login</h2>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="username" class="block text-xl font-medium text-zinc-500">Email</label>
            <input v-model="username" id="username" type="text" required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            />
          </div>

          <div>
            <label for="password" class="block text-xl font-medium text-zinc-500">Password</label>
            <input v-model="password" id="password" type="password" required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            />
          </div>

          <p class="text-zinc-500 text-sm">
            By signing in or creating an account, you agree with our 
            <a href="#" class="text-violet-500 hover:underline">Terms & Conditions</a> and 
            <a href="#" class="text-violet-500 hover:underline">Privacy Statement</a>
          </p>

          <div class="flex items-center space-x-2">
            <input id="agree" type="checkbox" class="h-5 w-5 accent-violet-600"/>
            <label for="agree" class="text-xl text-zinc-500">Remember me</label>
          </div>

          <button type="submit"
            class="w-full py-4 px-4 bg-violet-500 text-white hover:bg-violet-700 text-xl rounded-md"
          >
            Login
          </button>
          <p class="text-zinc-500 text-center">
            Don't have an account yet? 
            <span class="text-violet-500 hover:text-violet-700 hover:underline text-xl">
              <NuxtLink :to="{ name: 'register' }">Sign up</NuxtLink>
            </span>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'empty'
})
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const errorMessage = ref('')

const handleLogin = () => {
}
</script>


