<!-- <template>
  <div class="min-h-screen flex">
    <div class="w-[70%] relative bg-white">
    <img src="/img/login.jpg" alt="Login Image" class="w-full max-h-screen object-cover object-[center_70%]" />
    <img src="/img/logo-aloha.svg" alt="Logo" class="absolute top-8 left-20 w-32" />
    <P class="text-black text-5xl font-bold absolute top-64 left-20 w-[500px] tracking-wide">
      An ideal hotel makes a wonderful Trip
    </P>
    <P class="absolute text-sm top-96 left-20 w-100 text-zinc-500 ">
      Discover your dream destination and hotel on ALOHA.com
    </P>
    </div>

    <div class="w-[30%] flex items-center  bg-white">
      <div class="p-8 rounded-2xl  w-full max-w-md">
        <h2 class="text-4xl font-bold text-left mb-6 text-black font-sans">Login</h2>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="username" class="block text-xl font-medium text-zinc-500">Email</label>
            <input v-model="username" id="username" type="text" required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="password" class="block text-xl font-medium text-zinc-500">Password</label>
            <input v-model="password" id="password" type="password" required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            class="w-full py-4 px-4 bg-violet-500 text-white hover:bg-violet-700 text-xl"
          >
            Login
          </button>
          <p class="text-zinc-500 text-center">
            Don't have an account yet? 
            <a href="/signup" class="text-violet-500 hover:text-violet-700 hover:underline text-xl">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template> -->

<!-- 手機 -->
<!-- <template>
  <div class="min-h-screen bg-white">
    <img src="/img/logo-aloha.svg" alt="Logo" class="absolute top-4 left-8 w-32" />

    <div class="p-10 w-full max-w-md pt-20">
      <h2 class="text-4xl font-bold text-left mb-6 text-black font-sans">Login</h2>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label for="username" class="block text-xl font-medium text-zinc-500">Email</label>
          <input v-model="username" id="username" type="text" required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          />
        </div>

        <div>
          <label for="password" class="block text-xl font-medium text-zinc-500">Password</label>
          <input v-model="password" id="password" type="password" required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
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
          <a href="/signup" class="text-violet-500 hover:text-violet-700 hover:underline text-xl">Sign up</a>
        </p>
      </form>
    </div>
  </div>
</template> -->

<!-- 平板 -->
<!-- <template>
  <div class="min-h-screen relative">
    <img src="/img/login.jpg" alt="Login Image" class="w-full h-full object-cover absolute inset-0 z-0" />
    <img src="/img/logo-aloha.svg" alt="Logo" class="relative absolute top-8 left-20 w-32" />
    
    <div class="flex items-center justify-center relative z-10 mt-16">
      <div class="p-8 rounded-2xl bg-opacity-80 w-full max-w-md">
        <h2 class="text-5xl font-bold text-left mb-6 text-black font-sans">Login</h2>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="username" class="block text-xl font-medium text-zinc-500">Email</label>
            <input v-model="username" id="username" type="text" required
              class="mt-1 block w-full px-4 py-4 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div>
            <label for="password" class="block text-xl font-medium text-zinc-500">Password</label>
            <input v-model="password" id="password" type="password" required
              class="mt-1 block w-full px-4 py-4 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <p class="text-zinc-500 text-md">
            By signing in or creating an account, you agree with our 
            <a href="#" class="text-violet-500 hover:underline">Terms & Conditions</a> and 
            <a href="#" class="text-violet-500 hover:underline">Privacy Statement</a>
          </p>

          <div class="flex items-center space-x-2">
            <input id="agree" type="checkbox" class="h-5 w-5 accent-violet-600"/>
            <label for="agree" class="text-2xl text-zinc-500">Remember me</label>
          </div>

          <button type="submit"
            class="w-full py-4 px-4 bg-violet-500 text-white hover:bg-violet-700 text-2xl"
          >
            Login
          </button>
          <p class="text-zinc-500 text-center text-2xl">
            Don't have an account yet? 
            <a href="/signup" class="text-violet-500 hover:text-violet-700 hover:underline text-xl">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template> -->

<style>

</style>

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
