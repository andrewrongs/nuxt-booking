<template>
  <div class="w-full max-w-3xl p-4 mx-auto overflow-hidden bg-white shadow-md xl:max-w-5xl rounded-xl sm:p-6 md:flex md:gap-6">
    <img src="/img/room.jpg" alt="房型圖片" class="object-cover w-full h-48 rounded-lg sm:h-56 md:w-64 md:h-auto"/>
    <div class="flex-1 mt-4 space-y-3 md:mt-0">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 class="text-xl font-bold text-gray-800">{{ room.name }}</h2>
        <div class="mt-2 text-lg font-semibold text-rose-600 md:mt-0">
          NT$ {{ room.price.toLocaleString() }}
        </div>
      </div>

      <div class="text-sm text-gray-600">
        👤 可入住人數：{{ room.capacity }} 人
      </div>

      <ul class="flex flex-wrap gap-2 text-sm text-gray-500">
        <li v-for="(facility, index) in room.facilities" :key="index" class="px-3 py-1 bg-gray-100 rounded-full">
          {{ facility }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const room = {
  name: '豪華雙人房 Deluxe Room',
  capacity: 2,
  facilities: ['免費 Wi-Fi', '獨立浴缸', '電視', '冷氣', '書桌', '吹風機','海景房'],
  price: 4200,
}
</script>
