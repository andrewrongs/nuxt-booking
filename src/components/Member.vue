<template>
  <div class="flex flex-col items-center md:items-start text-zinc-500 gap-4 text-2xl mx-auto md:w-4/5 xl:w-1/2 p-4">用戶詳細資料
    <div class="flex flex-row items-center bg-purple-200 w-full hover:shadow-lg transition-shadow duration-500">
        <img src="/img/logo-aloha.svg" alt="avatar" class="w-24 h-24 rounded-full mr-6 p-2 bg-stone-300"/>
        <div class="flex flex-col mb-1 text-zinc-500 w-full">
            <div class="flex justify-between items-center mb-1">
                <span>英文姓名</span>
                <a href="#" class="text-blue-700 hover:underline text-sm p-4">編輯</a>
            </div>
            <h2 class="text-xl font-bold">{{ user.name }}</h2>
        </div>
    </div>

    <div class="text-left w-full">
        <div class="bg-indigo-200 mb-6 p-4 hover:shadow-lg transition-shadow duration-500">
            <div class="flex justify-between items-center mb-1">
                <span>電子郵件</span>
                <a href="#" class="text-blue-700 hover:underline text-sm">更換</a>
            </div>
            <p>{{ user.email }}</p>
        </div>
        <div class="bg-indigo-200 mb-6 p-4 hover:shadow-lg transition-shadow duration-500">
            <div class="flex justify-between items-center mb-1">
                <span>電話號碼</span>
                <a href="#" class="text-blue-700 hover:underline text-sm">編輯</a>
            </div>
            <p>{{ user.phone }}</p>
        </div>
        <div class="bg-indigo-200 mb-6 p-4 hover:shadow-lg transition-shadow duration-500">
            <div class="flex justify-between items-center mb-1">
                <span>密碼</span>
                <a href="#" class="text-blue-700 hover:underline text-sm">編輯</a>
            </div>
        <p>{{ user.password }}</p>
        </div>
    </div>                
    <!-- <button class="mt-2 px-4 py-1 bg-violet-500 text-white rounded hover:bg-blue-600" @click="editProfile">編輯</button> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const user = ref({
  name: 'Andy Wang',
  email: 'example@email.com',
  phone: '0911111111',
  password:'********'
})

function editProfile() {
  alert('編輯')
}
</script>
