<template>
    <div
        class="w-full max-w-md xl:w-[30%] relative md:absolute xl:static
    md:top-96 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 xl:translate-x-0 xl:translate-y-0 xl:flex xl:items-center">
        <div class="w-full">
            <h2 class="mb-6 font-sans text-4xl font-bold text-left text-black">Login</h2>
            <form @submit.prevent="handleLogin" class="space-y-4">
                <div>
                    <label for="username" class="block text-xl font-medium text-zinc-500">Email</label>
                    <input v-model="username" id="username" type="text" required
                        class="block w-full px-4 py-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label for="password" class="block text-xl font-medium text-zinc-500">Password</label>
                    <input v-model="password" id="password" type="password" required
                        class="block w-full px-4 py-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <p class="text-sm text-zinc-500">
                    By signing in or creating an account, you agree with our
                    <a href="#" class="text-violet-500 hover:underline">Terms & Conditions</a> and
                    <a href="#" class="text-violet-500 hover:underline">Privacy Statement</a>
                </p>

                <div class="flex items-center space-x-2">
                    <input id="agree" type="checkbox" class="w-5 h-5 accent-violet-600" />
                    <label for="agree" class="text-xl text-zinc-500">Remember me</label>
                </div>

                <button type="submit"
                    class="w-full px-4 py-4 text-xl text-white rounded-md bg-violet-500 hover:bg-violet-700">
                    Login
                </button>
                <p class="text-center text-zinc-500">
                    Don't have an account yet?
                    <span class="text-xl text-violet-500 hover:text-violet-700 hover:underline">
                        <NuxtLink :to="{ name: 'register' }">Sign up</NuxtLink>
                    </span>
                </p>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'empty'
})

const username = ref('')
const password = ref('')
const errorMessage = ref('')

const handleLogin = () => {
}
</script>