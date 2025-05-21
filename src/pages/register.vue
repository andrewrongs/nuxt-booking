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
    md:top-96 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 xl:translate-x-0 xl:translate-y-0 xl:flex xl:items-center xl:justify-center">
      <div class="w-full">
        <h2 class="text-4xl font-bold text-left mb-6 text-black font-sans">Register</h2>
        <form @submit.prevent="handleLogin" class="space-y-4 text-black">
          <div>
            <label for="Account" class="block text-xl font-medium text-zinc-500">Account</label>
            <input id="Account" type="text" required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            />
          </div>
          <div>
            <label for="Email" class="block text-xl font-medium text-zinc-500">Email</label>
            <input id="Email" type="text" required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            />
          </div>

          <div>
            <label for="Password" class="block text-xl font-medium text-zinc-500">Password</label>
            <input id="Password" type="password" required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            />
          </div>

          <div>
            <label for="Check Password" class="block text-xl font-medium text-zinc-500">Check Password</label>
            <input id="Check Password" type="password" required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            />
          </div>

          <div>
            <label for="Invite code" class="block text-xl font-medium text-zinc-500">Invite code</label>
            <input id="Invite code" type="string"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            />
          </div>

          <div lang="en">
            <label for="Birthday" class="block text-xl font-medium text-zinc-500">Birthday</label>
            <input id="Birthday" type="date" required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            />
          </div>
          
          <p class="text-zinc-500 text-sm">
            By signing in or creating an account, you agree with our 
            <a href="#" class="text-violet-500 hover:underline">Terms & Conditions</a> and 
            <a href="#" class="text-violet-500 hover:underline">Privacy Statement</a>
          </p>

          <button type="button"
            class="w-full flex items-center justify-center gap-4 py-3 px-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
          >
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" class="w-6 h-6" />
          <span class="text-black text-md">Sign up with Google</span>
          </button>

          <button type="submit"
            class="w-full py-4 px-4 bg-violet-500 text-white hover:bg-violet-700 text-xl rounded-md"
          >
          Register
          </button>
          <p class="text-zinc-500 text-center">
            Have a account? 
            <span class="text-violet-500 hover:text-violet-700 hover:underline text-xl">
              <NuxtLink :to="{ name: 'login' }">Sign in</NuxtLink>
            </span>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">

const notify = () => {
    useNuxtApp().$toast("就是這麼簡單！")
  }
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