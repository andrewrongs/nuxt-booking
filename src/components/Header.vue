<template>
    <header class="relative z-50 flex flex-wrap items-center justify-around py-6 xl:container">
        <div class="flex-1 pl-24">
            <NuxtLink :to="{ name: 'index' }" class="inline-block">
                <NuxtImg src="/logo.svg" alt="ALOHA" class="h-8 cursor-pointer" />
            </NuxtLink>
        </div>
        <div class="flex items-center space-x-8">
            <Menu as="div" class="relative inline-block text-left">
                <MenuButton class="flex items-center space-x-1">
                    <span class="flex items-center tracking-wide cursor-pointer mdi mdi-web mdi-20px"></span>
                    <span class="text-sm">{{ baseLanguage }}</span>
                    <span class="mdi mdi-menu-down mdi-24px"></span>
                </MenuButton>
                <transition enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                    <MenuItems
                        class="absolute w-24 text-center bg-white rounded-md shadow-xl dark:bg-gray-600 focus:outline-none">
                        <div>
                            <MenuItem v-for="option in languageOptions" :key="option.value" v-slot="{ active }">
                            <button @click="selectLanguage(option.value)" :class="[
                                active
                                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                                    : 'text-gray-700 dark:text-gray-300',
                                'block w-full text-left px-4 py-2 text-sm',
                            ]">
                                {{ option.value }}
                            </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
        <ul class="flex px-6">
            <li class="pr-6 text-sm cursor-pointer">
                <ColorMode />
            </li>
            <li class="pr-6 text-sm cursor-pointer">
                <NuxtLink :to="{ name: 'login' }">登入</NuxtLink>
            </li>
            <li class="pr-6 text-sm cursor-pointer">
                <NuxtLink :to="{ name: 'register' }">新朋友這裡</NuxtLink>
            </li>
        </ul>
    </header>
</template>
<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

interface Options {
    value: string;
}

const languageOptions: Options[] = [{ value: "English" }, { value: "繁體中文" }];
const baseLanguage = ref<string>("繁體中文");
const selectLanguage = (value: string): void => {
    baseLanguage.value = value;
};
</script>
