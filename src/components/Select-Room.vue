<template>
  <div class="w-full max-w-3xl xl:max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 md:flex md:gap-6">
    <img src="/img/room.jpg" alt="房型圖片" class="w-full h-48 sm:h-56 md:w-64 md:h-auto object-cover rounded-lg"/>
    <div class="flex-1 mt-4 md:mt-0 space-y-3">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 class="text-xl font-bold text-gray-800">{{ room.name }}</h2>
        <div class="text-lg font-semibold text-rose-600 mt-2 md:mt-0">
          NT$ {{ room.price.toLocaleString() }}
        </div>
      </div>

      <div class="text-gray-600 text-sm">
        👤 可入住人數：{{ room.capacity }} 人
      </div>

      <ul class="flex flex-wrap gap-2 text-sm text-gray-500">
        <li v-for="(facility, index) in room.facilities" :key="index1" class="bg-gray-100 px-3 py-1 rounded-full">
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
