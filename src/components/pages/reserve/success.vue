<template>
    <div class="w-full  min-h-screen max-w-lg md:max-w-4xl flex items-top justify-center p-4">
        <div class="w-full">
            <h2 class="mb-6 font-sans text-3xl font-bold text-left text-black p-4">Reservation received!</h2>
            <form @submit.prevent="handleLogin" class="space-y-4 text-black">
                <hr>
                <div class="w-full text-md">
                    <div class="flex w-full p-4">
                        <div class="w-[30%] font-bold">Guest</div>
                        <div class="w-[70%] text-zinc-500">{{ successInfo.name }}</div>
                    </div>

                    <div class="flex w-full p-4">
                        <div class="w-[30%] font-bold">Email</div>
                        <div class="w-[70%] text-zinc-500">{{ successInfo.email }}
                        <br class="md:hidden">
                        <a href="" class="text-violet-500 md:ml-4">Confirmation email sent to this address</a>
                        </div>
                    </div>

                    <div class="flex w-full p-4">
                        <div class="w-[30%] font-bold">Phone</div>
                        <div class="w-[70%] text-zinc-500">{{ successInfo.phone }}</div>
                    </div>
                    <hr>

                    <div class="flex w-full p-4">
                        <div class="w-[30%] font-bold">Room</div>
                        <div class="w-[70%] text-zinc-500">{{ successInfo.room }}</div>
                    </div>
                    <hr>

                    <div class="flex w-full p-4">
                        <div class="w-[30%] font-bold">Check-In</div>
                        <div class="w-[70%] text-zinc-500">{{ successInfo.checkIn }}</div>
                    </div>

                    <div class="flex w-full p-4">
                        <div class="w-[30%] font-bold">Check-Out</div>
                        <div class="w-[70%] text-zinc-500">{{ successInfo.checkout }}</div>
                    </div>
                    <hr>
                </div>
                
                <div class="md:flex md:flex-row justify-end font-bold text-xl md:space-x-4">
                    <div class="mb-4 md:mb-0">
                        <button type="button" class="w-full md:w-auto py-3 px-6 text-violet-700 border border-violet-500 rounded-md shadow-sm">EDIT RESERVATION</button>
                    </div>
                    <div>
                        <button type="submit" class="w-full md:w-auto py-3 px-6 text-white rounded-md shadow-sm bg-violet-500 hover:bg-violet-700">HOMEPAGE</button>
                    </div>
                </div>



            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const successInfo = ref({
    name:'David Lin',
    email:'david0520@mail.com.tw',
    phone:'+886 9 32 456 789',
    room:'Deluxe Suite with pool/2night',
    checkIn:'Wednesday, 17 June 2020',
    checkout:'Friday, 19 June 2020'
})

const notify = () => {
    useNuxtApp().$toast("就是這麼簡單！")
}
const handleLogin = () => {
}
</script>