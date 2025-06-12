<template>
    <div class="
    w-full min-h-screen max-w-2xl flex items-top justify-center"
    >
        <div class="w-full">
            <form @submit.prevent="handleLogin" class="space-y-4 p-4">
                <div class="flex justify-between p-4 bg-gray-200 items-center relative md:hidden">
                    <div class="text-zinc-500">
                        Total
                        <span class="text-black font-bold">TWD 4633</span>
                    </div>

                    <div class="flex-shrink-0">
                        <button @click="expanded = !expanded"
                        class="flex justify-between items-center bg-transparent border-none shadow-none text-violet-700 min-w-[80px]">
                        <span>DETAIL</span>
                        <svg
                            :class="{ 'rotate-180': expanded }"
                            class="w-5 h-5 transition-transform duration-300"
                            fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                        </svg>
                        </button>
                    </div>
                    <transition name="expand">
                        <div v-if="expanded" class="overflow-hidden mt-4 bg-gray-100 rounded border p-4 text-zinc-500 w-full absolute top-full left-0 z-10 shadow-lg max-w-md">
                            <div class="text-black">Booking details</div>
                            <p>{{ bookingInfo.checkInDate }}</p>
                            <p>{{ bookingInfo.people }}</p>
                            <p>{{ bookingInfo.name }}</p>
                            <hr class="my-4">
                            <div class="text-black mt-2">Price summary</div>
                            <div class="flex justify-between">
                                <p>{{ bookingInfo.room }}</p>
                                <p>{{ price.room }}</p>
                            </div>
                            <div class="flex justify-between">
                                <p>{{ bookingInfo.tax }}</p>
                                <p>{{ price.vat }}</p>
                            </div>
                            <div class="flex justify-between">
                                <p>{{ bookingInfo.serviceCharge }}</p>
                                <p>{{ price.serviceCharge }}</p>
                            </div>
                            <hr class="my-4">
                            <div class="flex justify-between">
                                Total <p class="text-black font-bold">{{ price.total }}</p>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="md:flex md:justify-center md:items-center">
                    <div class="w-full md:p-4">
                        <h2 class="mb-6 font-sans text-2xl font-bold text-left text-black">Reservation details</h2>
                        <div>
                            <label for="username" class="block text-xl font-medium text-zinc-500">name</label>
                            <input v-model="username" id="username" type="text" required
                                class="block w-full px-4 py-4 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label for="phone" class="block text-xl font-medium text-zinc-500">phone</label>
                            <input v-model="phone" id="phone" type="text" required
                                class="block w-full px-4 py-4 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label for="email" class="block text-xl font-medium text-zinc-500">email</label>
                            <input v-model="email" id="email" type="email" required
                                class="block w-full px-4 py-4 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        
                        <button type="submit"
                            class="w-full px-4 py-4 mt-4 text-xl text-white rounded-md bg-violet-500 hover:bg-violet-700">
                            RESERVE
                        </button>

                        <p class="text-center text-violet-500 hover:text-violet-700 hover:underline p-4">
                            reserve now, pay at stay
                        </p>
                    </div>

                    <div class="hidden md:w-full md:block">
                        <div class="overflow-hidden mt-4 bg-gray-100 rounded border p-4 text-zinc-500 w-full">
                            <div class="text-black">Booking details</div>
                            <p>{{ bookingInfo.checkInDate }}</p>
                            <p>{{ bookingInfo.people }}</p>
                            <p>{{ bookingInfo.name }}</p>
                            <hr class="my-4">
                            <div class="text-black mt-2">Price summary</div>
                            <div class="flex justify-between">
                                <p>{{ bookingInfo.room }}</p>
                                <p>{{ price.room }}</p>
                            </div>
                            <div class="flex justify-between">
                                <p>{{ bookingInfo.tax }}</p>
                                <p>{{ price.vat }}</p>
                            </div>
                            <div class="flex justify-between">
                                <p>{{ bookingInfo.serviceCharge }}</p>
                                <p>{{ price.serviceCharge }}</p>
                            </div>
                            <hr class="my-4">
                            <div class="flex justify-between">
                                Total <p class="text-black font-bold">{{ price.total }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const expanded = ref(false)
const bookingInfo = ref({
  checkInDate: '17 June 2020 - 19 June 2020．2 night',
  people: '2 adults．1 room',
  name: 'Rachada Hotel',
  room: 'Deluxe suite with pool',
  tax: 'VAT(7%)',
  serviceCharge:'property service charge',
})
const price = ref({
    room:'TWD 3,960',
    vat:'TWD 277',
    serviceCharge:'TWD 396',
    total:'TWD 4,633'
})

definePageMeta({
    layout: 'empty'
})

const username = ref('')
const phone = ref('')
const email = ref('')

const handleLogin = () => {
}
</script>