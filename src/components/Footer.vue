<template>
    <footer class="z-50 flex items-center justify-around py-6 realtive">
        <h2>© 2025 ALOHA Inc. All rights reserved.</h2>
        <ul class="flex justify-between">
            <li class="pr-6 cursor-pointer">FAQs</li>
            <li class="pr-6 cursor-pointer">聯繫</li>
            <li class="pr-6 cursor-pointer">隱私權政策</li>
        </ul>
          <div class="flex items-center space-x-6">
            <Menu as="div" class="relative inline-block text-left group">
              <MenuButton class="flex items-center space-x-1">
                <span
                  class="flex items-center tracking-wide cursor-pointer mdi mdi-currency-usd mdi-20px"
                ></span>
                <span class="text-sm">{{ baseCurrency }}</span>
                <span class="mdi mdi-menu-up mdi-24px"></span>
              </MenuButton>
              <div class="hidden group-hover:block">
                <MenuItems static class="absolute w-24 mb-2 text-center bg-white rounded-md shadow-xl bottom-full dark:bg-gray-600 focus:outline-none">
                  <div>
                      <MenuItem v-for="option in currencyOptions" :key="option.value" v-slot="{ active }">
                          <button
                            @click="selectCurrency(option.value)"
                            :class="[
                              active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300',
                              'block w-full text-left px-4 py-2 text-sm'
                            ]"
                          >
                            {{ option.value }}
                          </button>
                        </MenuItem>
          
                  </div>
                </MenuItems>
              </div>
            </Menu>
          </div>
    </footer>
</template>
<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

interface Options {
    value:string
}
const currencyOptions: Options[] =[{value:'TWD'}, {value:'USD'}] 
const baseCurrency = ref<string>('TWD');
const selectCurrency = (value: string): void => {
    baseCurrency.value = value;
};

</script>