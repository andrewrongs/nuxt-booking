<template>
    <div class="flex flex-col items-center gap-4 p-4 mx-auto text-2xl md:items-start text-zinc-500 md:w-4/5 xl:w-1/2">
        用戶詳細資料
        <div class="flex flex-row items-center w-full transition-shadow duration-500 bg-purple-200 hover:shadow-lg">
            <img src="/logo.svg" alt="avatar" class="w-24 h-24 p-2 mr-6 rounded-full bg-stone-300" />
            <div class="flex flex-col w-full mb-1 text-zinc-500">
                <div class="flex items-center justify-between mb-1">
                    <span>英文姓名</span>
                    <a href="#" class="p-4 text-sm text-blue-700 hover:underline">編輯</a>
                </div>
                <h2 class="text-xl font-bold">{{ user.name }}</h2>
            </div>
        </div>

        <div class="w-full text-left">
            <div class="p-4 mb-6 transition-shadow duration-500 bg-indigo-200 hover:shadow-lg">
                <div class="flex items-center justify-between mb-1">
                    <span>電子郵件</span>
                    <a href="#" class="text-sm text-blue-700 hover:underline">更換</a>
                </div>
                <p>{{ user.email }}</p>
            </div>
            <div class="p-4 mb-6 transition-shadow duration-500 bg-indigo-200 hover:shadow-lg">
                <div class="flex items-center justify-between mb-1">
                    <span>電話號碼</span>
                    <a href="#" class="text-sm text-blue-700 hover:underline">編輯</a>
                </div>
                <p>{{ user.phone }}</p>
            </div>
            <div class="p-4 mb-6 transition-shadow duration-500 bg-indigo-200 hover:shadow-lg">
                <div class="flex items-center justify-between mb-1">
                    <span>密碼</span>
                    <a href="#" class="text-sm text-blue-700 hover:underline">編輯</a>
                </div>
                <p>{{ user.password }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const user = ref({
    name: 'Andy Wang',
    email: 'example@email.com',
    phone: '0911111111',
    password: '********'
})

function editProfile() {
    alert('編輯')
}
</script>
